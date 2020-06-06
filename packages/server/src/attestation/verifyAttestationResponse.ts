import {
  AttestationCredentialJSON,
} from '@simplewebauthn/typescript-types';

import decodeAttestationObject, { ATTESTATION_FORMATS } from '../helpers/decodeAttestationObject';
import decodeClientDataJSON from '../helpers/decodeClientDataJSON';
import parseAuthenticatorData from '../helpers/parseAuthenticatorData';
import toHash from '../helpers/toHash';

import verifyFIDOU2F from './verifications/verifyFIDOU2F';
import verifyPacked from './verifications/verifyPacked';
import verifyNone from './verifications/verifyNone';
import verifyAndroidSafetynet from './verifications/verifyAndroidSafetyNet';

/**
 * Verify that the user has legitimately completed the registration process
 *
 * @param response Authenticator attestation response with base64url-encoded values
 * @param expectedChallenge The random value provided to generateAttestationOptions for the
 * authenticator to sign
 * @param expectedOrigin Expected URL of website attestation should have occurred on
 */
export default function verifyAttestationResponse(
  credential: AttestationCredentialJSON,
  expectedChallenge: string,
  expectedOrigin: string,
  expectedRPID: string,
): VerifiedAttestation {
  const { response } = credential;
  const clientDataJSON = decodeClientDataJSON(response.clientDataJSON);

  const { type, origin, challenge } = clientDataJSON;

  // Make sure we're handling an attestation
  if (type !== 'webauthn.create') {
    throw new Error(`Unexpected attestation type: ${type}`);
  }

  // Ensure the device provided the challenge we gave it
  if (challenge !== expectedChallenge) {
    throw new Error(
      `Unexpected attestation challenge "${challenge}", expected "${expectedChallenge}"`,
    );
  }

  // Check that the origin is our site
  if (origin !== expectedOrigin) {
    throw new Error(`Unexpected attestation origin "${origin}", expected "${expectedOrigin}"`);
  }

  const attestationObject = decodeAttestationObject(response.attestationObject);
  const { fmt, authData, attStmt } = attestationObject;

  const parsedAuthData = parseAuthenticatorData(authData);
  const { rpIdHash, flags, COSEPublicKey } = parsedAuthData;

  // Make sure the response's RP ID is ours
  const expectedRPIDHash = toHash(Buffer.from(expectedRPID, 'ascii'));
  if (!rpIdHash.equals(expectedRPIDHash)) {
    throw new Error(`Unexpected RP ID hash`);
  }


  /**
   * Verification can only be performed when attestation = 'direct'
   */
  if (fmt === ATTESTATION_FORMATS.FIDO_U2F) {
    return verifyFIDOU2F(attestationObject, response.clientDataJSON);
  }

  if (fmt === ATTESTATION_FORMATS.PACKED) {
    return verifyPacked(attestationObject, response.clientDataJSON);
  }

  if (fmt === ATTESTATION_FORMATS.ANDROID_SAFETYNET) {
    return verifyAndroidSafetynet(attestationObject, response.clientDataJSON);
  }

  if (fmt === ATTESTATION_FORMATS.NONE) {
    return verifyNone(attestationObject);
  }

  throw new Error(`Unsupported Attestation Format: ${fmt}`);
}

/**
 * Result of attestation verification
 *
 * @param verified If the assertion response could be verified
 * @param userVerified Whether the user was uniquely identified during attestation
 * @param authenticatorInfo.fmt Type of attestation
 * @param authenticatorInfo.counter The number of times the authenticator reported it has been used.
 * Should be kept in a DB for later reference to help prevent replay attacks
 * @param authenticatorInfo.base64PublicKey Base64URL-encoded ArrayBuffer containing the
 * authenticator's public key. **Should be kept in a DB for later reference!**
 * @param authenticatorInfo.base64CredentialID Base64URL-encoded ArrayBuffer containing the
 * authenticator's credential ID for the public key above. **Should be kept in a DB for later
 * reference!**
 */
export type VerifiedAttestation = {
  verified: boolean;
  userVerified: boolean;
  authenticatorInfo?: {
    fmt: ATTESTATION_FORMATS;
    counter: number;
    base64PublicKey: string;
    base64CredentialID: string;
  };
};
