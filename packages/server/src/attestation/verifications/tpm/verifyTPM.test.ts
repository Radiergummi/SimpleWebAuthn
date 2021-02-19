import verifyAttestationResponse from '../../verifyAttestationResponse';
import base64url from 'base64url';

test('should verify TPM response', async () => {
  const expectedChallenge = 'a4de0d36-057d-4e9d-831a-2c578fa89170';
  jest.spyOn(base64url, 'encode').mockReturnValueOnce(expectedChallenge);
  const verification = await verifyAttestationResponse({
    credential: {
      id: 'SErwRhxIzjPowcnM3e-D-u89EQXLUe1NYewpshd7Mc0',
      rawId: 'SErwRhxIzjPowcnM3e-D-u89EQXLUe1NYewpshd7Mc0',
      response: {
        attestationObject:
          'o2NmbXRjdHBtZ2F0dFN0bXSmY2FsZzkBAGNzaWdZAQBQOHlE5VBKg1MLNOxzRaWeOjV3Yq3BdrsAH_AczyCt_-ViFhu3pHPAz96LOJSdPbx1hBXXV8luSYtoadCiu145LQ-sD_3-Cv_lnOSiVnUC1tjUx2gdAWYWbWIexQ1jQpEc0OHi7J50zrggPM8-CCknw1t2suCU5MCD-u5rG9FA8COwDDqzthYxxFHjW6FLaC_bmEKMdFWFasVP3HaS0Zm7FOXni7eVAhpAHCbF5O9-gTBS6rkKkdU9WStjU73MjbGYXQkfH0oIIbef9lk3gcoeiOCtxjbzuoJxRz88fohLRJqhMc3_bc0S8UlV2elDGCT1o53KhmM6jEpXtS5emxH_Y3ZlcmMyLjBjeDVjglkEhzCCBIMwggNroAMCAQICDwStgIiExXme4brfBK3tSDANBgkqhkiG9w0BAQsFADBBMT8wPQYDVQQDEzZOQ1UtTlRDLUtFWUlELUZGOTkwMzM4RTE4NzA3OUE2Q0Q2QTAzQURDNTcyMzc0NDVGNkE0OUEwHhcNMTgwMjAxMDAwMDAwWhcNMjUwMTMxMjM1OTU5WjAAMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwOoUlH3ttEQJ3vc3eLuB3q9pJWyFjYDPIkltrrvCCtrxkqGBUGN5NWbUxPmOlD6FN-yrZn72qvr3SAaYYmpr3zwTc8IQLk_gr5mGjSjx-tPLBvzG2ugtfo-MAtQos4-igb9YhPLEVnjNkXORdk2rKmzNkuIsHt0d13ErUjMbd0P-TSXyrK2Mqh83n0GO1JSSwYd_7Kv1UAKTc8hDHiF6G2NWv6j3dv3y81RTzMblZof_3cDS_ckM4XMhnVbtr1ZijQfFCE7MkC7Iaox2HlnR4EuPFZtmkDVA3BZBV4jJQkw3V2qWAiy8n5Gakfqu1nJ9ASdY-QjtcdxAxS5HD9YlCQIDAQABo4IBtzCCAbMwDgYDVR0PAQH_BAQDAgeAMAwGA1UdEwEB_wQCMAAwewYDVR0gAQH_BHEwbzBtBgkrBgEEAYI3FR8wYDBeBggrBgEFBQcCAjBSHlAARgBBAEsARQAgAEYASQBEAE8AIABUAEMAUABBACAAVAByAHUAcwB0AGUAZAAgAFAAbABhAHQAZgBvAHIAbQAgAEkAZABlAG4AdABpAHQAeTAQBgNVHSUECTAHBgVngQUIAzBKBgNVHREBAf8EQDA-pDwwOjE4MA4GBWeBBQIDDAVpZDoxMzAQBgVngQUCAgwHTlBDVDZ4eDAUBgVngQUCAQwLaWQ6RkZGRkYxRDAwHwYDVR0jBBgwFoAUdOhwbuNi8U8_KoCvb3uGHTvHco0wHQYDVR0OBBYEFM8mwuxelMX4CRoIgZUqNrfpeywzMHgGCCsGAQUFBwEBBGwwajBoBggrBgEFBQcwAoZcaHR0cHM6Ly9maWRvYWxsaWFuY2UuY28ubnovdHBtcGtpL05DVS1OVEMtS0VZSUQtRkY5OTAzMzhFMTg3MDc5QTZDRDZBMDNBREM1NzIzNzQ0NUY2QTQ5QS5jcnQwDQYJKoZIhvcNAQELBQADggEBAAu0b-1iYy5HRou5bvrLdAHw0T9zu_E1KLlK9p6Y0UJdkeN_ogpk4xxW_6P_-zTkr-HV7NItUg2un6sHREwSbSsZkrCL-29EU_ttKExQgEUVdMtlfmUY04fY9_yoEd22i3JBfcSfzKIIWo-ktoJa1Cdd8fLINilufLOKiAI7Rq1tAhiXAa2LDXOQhJ4pTStxoq_cVojDCXRs_ydBhsIUVk20m0WAZExpwrNnsBSsK2XgxBo-sFsCYtHMbuL4FyUujGqt5K3ARL_eCFfkqeD-6z5YteOF0kRVj5ICzZzhmv75UZCdpgAhsjzoIvIX6LM4gP9dPnuhgQbGc_e33MU97w1ZBgUwggYBMIID6aADAgECAg8EV2dM14jMuwRaKXATKH8wDQYJKoZIhvcNAQELBQAwgb8xCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNWTESMBAGA1UEBwwJV2FrZWZpZWxkMRYwFAYDVQQKDA1GSURPIEFsbGlhbmNlMQwwCgYDVQQLDANDV0cxNjA0BgNVBAMMLUZJRE8gRmFrZSBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxODExMC8GCSqGSIb3DQEJARYiY29uZm9ybWFuY2UtdG9vbHNAZmlkb2FsbGlhbmNlLm9yZzAeFw0xNzAyMDEwMDAwMDBaFw0zNTAxMzEyMzU5NTlaMEExPzA9BgNVBAMTNk5DVS1OVEMtS0VZSUQtRkY5OTAzMzhFMTg3MDc5QTZDRDZBMDNBREM1NzIzNzQ0NUY2QTQ5QTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANc-c30RpQd-_LCoiLJbXz3t_vqciOIovwjez79_DtVgi8G9Ph-tPL-lC0ueFGBMSPcKd_RDdSFe2QCYQd9e0DtiFxra-uWGa0olI1hHI7bK2GzNAZSTKEbwgqpf8vXMQ-7SPajg6PfxSOLH_Nj2yd6tkNkUSdlGtWfY8XGB3n-q--nt3UHdUQWEtgUoTe5abBXsG7MQSuTNoad3v6vk-tLd0W44ivM6pbFqFUHchx8mGLApCpjlVXrfROaCoc9E91hG9B-WNvekJ0dM6kJ658Hy7yscQ6JdqIEolYojCtWaWNmwcfv--OE1Ax_4Ub24gl3hpB9EOcBCzpb4UFmLYUECAwEAAaOCAXUwggFxMAsGA1UdDwQEAwIBhjAWBgNVHSAEDzANMAsGCSsGAQQBgjcVHzAbBgNVHSUEFDASBgkrBgEEAYI3FSQGBWeBBQgDMBIGA1UdEwEB_wQIMAYBAf8CAQAwHQYDVR0OBBYEFHTocG7jYvFPPyqAr297hh07x3KNMB8GA1UdIwQYMBaAFEMRFpma7p1QN8JP_uJbFckJMz8yMGgGA1UdHwRhMF8wXaBboFmGV2h0dHBzOi8vZmlkb2FsbGlhbmNlLmNvLm56L3RwbXBraS9jcmwvRklETyBGYWtlIFRQTSBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDE4LmNybDBvBggrBgEFBQcBAQRjMGEwXwYIKwYBBQUHMAKGU2h0dHBzOi8vZmlkb2FsbGlhbmNlLmNvLm56L3RwbXBraS9GSURPIEZha2UgVFBNIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IDIwMTguY3J0MA0GCSqGSIb3DQEBCwUAA4ICAQBI6GeuxIkeKcmRmFQnkPnkvSybRIJEkzWKa2f00vdBygxtzpkXF2WMHbvuMU3_K3WMFzg2xkSPjM3x_-UxOWGYgVIq8fXUdy2NhmLz4tPI65_nQXpS22rzmXFzsj4x9yS0JF2NnW5xm-O8UdckFdwIZx4Ew_zA-rIF3hqbY4Ejz2AdsbvHJo-WTpu-wWDbBQyR19eqNyYZ6vf9K8DB2JZviIDXdOpkuOJLA40MKMlnhv5K4BZs7mDZIaPzNA_MrcH3_dYXq4tIoGu5Pr1ZNCQ--93XYG1eRbvCgSDYUCRza5AgBGCIhmx2-tqLYeCd9qdy4O9R9c9qRjEThbjnGStYZ0DuB6VCaH1WjiRqyq4VNi9cv15-RoC4zswWwuHee97AAJ_Tx29w6S4Kw9DQR6A0vtw_OHLuOkGH63ns0DACf_h1MvsAMnXXX0Q0P8IpNdBQGvLvrRtRdBNx06NHY1HGZOZ9PdJ6J4mnroB2ln3cMGZG9kyRv2vbwq6sCrYZVYjo3tf4MUtkEY4FijoYbMEDK7VlbTiDPnobhkxI1-bz5DTFnR3IfVybYAeGrBCKSg2UUTPvVgM3WZ-oGlP8W9dg1347hqgxP0vLgDM6cV7rhaFC_ZAf2Et9KLRZSj7lNpJWxHxPyz9mM4w3qFwdgWKwlXl3OQtJRT4Kbs6r3gzB5WdwdWJBcmVhWQE2AAEACwAGBHIAIJ3_y_NsODrmmfuYaNxty4nXFTiEvigDkiwSQVi_rSKuABAAEAgAAAAAAAEAyrTnIMhu5L9IekvzVTVNQC_B6KLF5RjxsGSG77uhDTH1xvx5NrWRAuPxEk72qfIIhYtjaGV7W5AE1_ukFQ5kJI6GRbWqGjXFVrr2sKdwhEt-OEYNED98w-onDJrEQzavArkvUnvrCW9DWKEXAYJTDfO5EjkOPrBdrolsn9KrLLxAwQNimvADs0DbNh_nQBouzOrLo1cqotumrB8GBgMoo1TNPNydbj6XMWBPkLr80x0l17-wZ5GoVAOkS0US0j2gSPLYKFuvbqI2uEPFFP5gXxUjHcvL8C-Jtm1RqRlwcVe7yCAEKGeAYtO_4zg57RJ9-SS5f0Ju5Ybk88GghAsVZWhjZXJ0SW5mb1it_1RDR4AXACIACxHmjtRNtTcuFCluL4Ssx4OYdRiBkh4w_CKgb4tzx5RTACDQqzIhd64iLKVs_ajjQ6oOneGWAulD1ZvjSNcImb3hEwAAAAFHcBdIVWl7S8aFYKUBc375jTRWVfsAIgALtHtW7TTkHy4bqr58TXW5fVNgPv3f6eBaub4mUtjUSbYAIgALn_Mwnd0pw9xWhM1D9xO61kUmXwLkDF8pMZ7jiRjzSqZoYXV0aERhdGFZAWc93EcQ6cCIsinbqJ1WMiC7Ofcimv9GWwplaxr7mor4oEEAAABKp9bZOooNEeialKbPcQcvcwAgSErwRhxIzjPowcnM3e-D-u89EQXLUe1NYewpshd7Mc2kAQMDOQEAIFkBAMq05yDIbuS_SHpL81U1TUAvweiixeUY8bBkhu-7oQ0x9cb8eTa1kQLj8RJO9qnyCIWLY2hle1uQBNf7pBUOZCSOhkW1qho1xVa69rCncIRLfjhGDRA_fMPqJwyaxEM2rwK5L1J76wlvQ1ihFwGCUw3zuRI5Dj6wXa6JbJ_Sqyy8QMEDYprwA7NA2zYf50AaLszqy6NXKqLbpqwfBgYDKKNUzTzcnW4-lzFgT5C6_NMdJde_sGeRqFQDpEtFEtI9oEjy2Chbr26iNrhDxRT-YF8VIx3Ly_AvibZtUakZcHFXu8ggBChngGLTv-M4Oe0SffkkuX9CbuWG5PPBoIQLFWUhQwEAAQ',
        clientDataJSON:
          'eyJvcmlnaW4iOiJodHRwczovL2Rldi5kb250bmVlZGEucHciLCJjaGFsbGVuZ2UiOiJhNGRlMGQzNi0wNTdkLTRlOWQtODMxYS0yYzU3OGZhODkxNzAiLCJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIn0',
      },
      type: 'public-key',
      clientExtensionResults: {},
    },
    expectedChallenge,
    expectedOrigin: 'https://dev.dontneeda.pw',
    expectedRPID: 'dev.dontneeda.pw',
  });

  expect(verification.verified).toEqual(true);
});

test('should verify SHA1 TPM response', async () => {
  /**
   * Generated on real hardware on 03/03/2020
   *
   * Thanks to https://github.com/abergs/fido2-net-lib/blob/master/Test/TestFiles/attestationTPMSHA1Response.json
   */
  const expectedChallenge =
    '9JyUfJkg8PqoKZuD7FHzOE9dbyculC9urGTpGqBnEwnhKmni4rGRXxm3-ZBHK8x6riJQqIpC8qEa-T0qIFTKTQ';
  jest.spyOn(base64url, 'encode').mockReturnValueOnce(expectedChallenge);
  const verification = await verifyAttestationResponse({
    credential: {
      rawId: 'UJDoUJoGiDQF_EEZ3G_z9Lfq16_KFaXtMTjwTUrrRlc',
      id: 'UJDoUJoGiDQF_EEZ3G_z9Lfq16_KFaXtMTjwTUrrRlc',
      response: {
        clientDataJSON:
          'eyJvcmlnaW4iOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOSIsImNoYWxsZW5nZSI6IjlKeVVmSmtnOFBxb0tadUQ3Rkh6T0U5ZGJ5Y3VsQzl1ckdUcEdxQm5Fd25oS21uaTRyR1JYeG0zLVpCSEs4eDZyaUpRcUlwQzhxRWEtVDBxSUZUS1RRIiwidHlwZSI6IndlYmF1dGhuLmNyZWF0ZSJ9',
        attestationObject:
          'o2NmbXRjdHBtZ2F0dFN0bXSmY2FsZzn__mNzaWdZAQBIwu9LPAl-LgxlRzPlvn7L-0yuMnFFn1XALxXtGnmC5-oMIIqfUJWFbgBbkN2l2zPsqOCRT5GQU8ucKNI6HrlbuDAUIq7wjcxG5TzgQt3YtGMWtgEcrZn2ecUlQFKjY67_wZIuHLy443Ki1SjErNPrMrkIPe9lyFhIalMgrWLCol40gYIVr_9xLfgyX55c7XiB-XbUKhDLUv5uPA3CSAiWeWwWx26K2BTV85vHsaG6f2YFTfcQTFs1cTSwMm7A9C2SiQ7N01ENwM1urVxlCvuEsBgiXapR70Oyq_cfiENYY0ti7_w2fvikmfv0z0O1cJOAyUlYWjnWhT707chrVmkFY3ZlcmMyLjBjeDVjglkEXzCCBFswggNDoAMCAQICDwRsOt2imXnV5Z4BftcqfzANBgkqhkiG9w0BAQsFADBBMT8wPQYDVQQDEzZOQ1UtTlRDLUtFWUlELTM2MTA0Q0U0MEJCQ0MxRjQwRDg0QTRCQkQ1MEJFOTkwMjREOTU3RDQwHhcNMTgwMjAxMDAwMDAwWhcNMjUwMTMxMjM1OTU5WjAAMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmw-4ficURR_sgVfW7cs1iRoDGdxjBpCczF233ba_5WTP-RrsYZPlzWgSN9WXptuywzjZoDlbid7NlduSR1ZFsds4bW71LyKDL62eyqaiAc645gocXAyxdDIDJAeo-3N9Dm4vsw-Gy_0sd2v1UEkBhWjuE1gL5hcaB9EtXSDvHPwmrf0eYn_4cWu9AxqSxpn79JIPYEOUrURr2H8zyG4_P0j1a3MVBmtAymhpXBn9ila-bW7K_k0JYXBh5yAYZDsmHgFsXbUauDWdja3HYzkep9jXkFcegXOMjPr_QSqWRjawEvzoprnJ-QqoWNbaRhuD-UnfgCNbwseU8kZ0aQNjBQIDAQABo4IBjzCCAYswDgYDVR0PAQH_BAQDAgeAMAwGA1UdEwEB_wQCMAAwUwYDVR0gAQH_BEkwRzBFBgkrBgEEAYI3FR8wODA2BggrBgEFBQcCAjAqEyhGQUtFIEZJRE8gVENQQSBUcnVzdGVkIFBsYXRmb3JtIElkZW50aXR5MBAGA1UdJQQJMAcGBWeBBQgDMEoGA1UdEQEB_wRAMD6kPDA6MTgwDgYFZ4EFAgMMBWlkOjEzMBAGBWeBBQICDAdOUENUNnh4MBQGBWeBBQIBDAtpZDpGRkZGRjFEMDAfBgNVHSMEGDAWoBRRfyLI5lOlfNVM3TBYfjD_ZzaMXTAdBgNVHQ4EFgQUO6SUmiOhCHVZcq-88acg2uQkQz8weAYIKwYBBQUHAQEEbDBqMGgGCCsGAQUFBzAChlxodHRwczovL2ZpZG9hbGxpYW5jZS5jby5uei90cG1wa2kvTkNVLU5UQy1LRVlJRC0zNjEwNENFNDBCQkNDMUY0MEQ4NEE0QkJENTBCRTk5MDI0RDk1N0Q0LmNydDANBgkqhkiG9w0BAQsFAAOCAQEAIIyVBkck_SD2nbj4KOwUI6cYZHrjwrcULoEiOSXn9TjTIiB5MdBMvqqNyAXiyWoWd1GEc_MI3mKOzu4g5UTVQQqfiOTrqfuZrpoU0tAeojKnZLj2wYj5GpyOfEkPK3m9qVaDxiYrh6aS8a3w_Iog878EiIaoVALbBt5uAfh0TAHHwSdxHtU8DRJrC43yIqcP9byRqssJmgSNcpMAjw_hcKJxDMD2UurvsMasqyWvK533yNA0-VwXvk3HI0ItSOw_g352D-qOTHI82lJIjc3yKoaNeYKn7RzgcLAF7AesTiiJReY2kU_vLyf-wH54-08T3oyBBJpBCHc1y_Lt5d2qWFkGCDCCBgQwggPsoAMCAQICENBTpEeEh5lpTgeR7VT9oQcwDQYJKoZIhvcNAQELBQAwgb8xCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNWTESMBAGA1UEBwwJV2FrZWZpZWxkMRYwFAYDVQQKDA1GSURPIEFsbGlhbmNlMQwwCgYDVQQLDANDV0cxNjA0BgNVBAMMLUZJRE8gRmFrZSBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxODExMC8GCSqGSIb3DQEJARYiY29uZm9ybWFuY2UtdG9vbHNAZmlkb2FsbGlhbmNlLm9yZzAeFw0xNzAyMDEwMDAwMDBaFw0zNTAxMzEyMzU5NTlaMEExPzA9BgNVBAMTNk5DVS1OVEMtS0VZSUQtMzYxMDRDRTQwQkJDQzFGNDBEODRBNEJCRDUwQkU5OTAyNEQ5NTdENDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANc-c30RpQd-_LCoiLJbXz3t_vqciOIovwjez79_DtVgi8G9Ph-tPL-lC0ueFGBMSPcKd_RDdSFe2QCYQd9e0DtiFxra-uWGa0olI1hHI7bK2GzNAZSTKEbwgqpf8vXMQ-7SPajg6PfxSOLH_Nj2yd6tkNkUSdlGtWfY8XGB3n-q--nt3UHdUQWEtgUoTe5abBXsG7MQSuTNoad3v6vk-tLd0W44ivM6pbFqFUHchx8mGLApCpjlVXrfROaCoc9E91hG9B-WNvekJ0dM6kJ658Hy7yscQ6JdqIEolYojCtWaWNmwcfv--OE1Ax_4Ub24gl3hpB9EOcBCzpb4UFmLYUECAwEAAaOCAXcwggFzMAsGA1UdDwQEAwIBhjAWBgNVHSAEDzANMAsGCSsGAQQBgjcVHzAbBgNVHSUEFDASBgkrBgEEAYI3FSQGBWeBBQgDMBIGA1UdEwEB_wQIMAYBAf8CAQAwHwYDVR0OBBgEFsIUUX8iyOZTpXzVTN0wWH4w_2c2jF0wHwYDVR0jBBgwFqAUXH82LZCtWry6jnXa3jqg7cFOAoswaAYDVR0fBGEwXzBdoFugWYZXaHR0cHM6Ly9maWRvYWxsaWFuY2UuY28ubnovdHBtcGtpL2NybC9GSURPIEZha2UgVFBNIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IDIwMTguY3JsMG8GCCsGAQUFBwEBBGMwYTBfBggrBgEFBQcwAoZTaHR0cHM6Ly9maWRvYWxsaWFuY2UuY28ubnovdHBtcGtpL0ZJRE8gRmFrZSBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxOC5jcnQwDQYJKoZIhvcNAQELBQADggIBAG138t55DF9nPJbvbPQZOypmyTPpNne0A5fh69P1fHZ5qdE2PDz3cf5Tl-8OPI4xQniEFNPcXMb7KlhMM6zCl4GkZtNN4MxygdFjQ1gTZOBDpt7Dwziij0MakmwyC0RYTNtbSyVhHUevgw9rnu13EzqxPyL5JD-UqADh2Y51MS0qy7IOgegLQv-eJzSNUgHxFJreUzz4PU6yzSsTyyYDW-H4ZjAQKienVp8ewZf8oHGWHGQFGa5E9m1P8vxCMZ7pIzeQweCVYrs3q7unu4nzBAIXLPI092kYFUgyz3lIaSB3XEiPBokpupX6Zmgrfphb-XX3tbenH5hkxfumueA5RMHTMu5TVjhJXiV0yM3q5W5xrQHdJlF5nOdJDEE-Kb7nm6xaT1DDpafqBc5vEDMkJmBA4AXHUY7JPGqEEzEenT7k6Wn5IQLZg4qc8Irnj__yM7xUhJWJam47KVbLA4WFu-IKvJrkP5GSglZ9qASOCxBHaOL2UcTAg50uvhUSwur2KSak2vlENdmAijwdAL4LLQWrkFd-9NBwcNwTdfK4ekEHP1l4BwJtkNwW6etUgeA5rkW2JLocXoBq5v7GSk4_CBoKhyiahQGQQ9SZFGeBJhzzkK9yN-yKskcVjjjInSHPl-ZpeOK3sI08sEyTH0gxlTtRoX0MKDsMAHEVToe5o1u9Z3B1YkFyZWFZATYAAQALAAYEcgAgnf_L82w4OuaZ-5ho3G3LidcVOIS-KAOSLBJBWL-tIq4AEAAQCAAAAAAAAQCl9siJwqoHJ2pCwEKyLQ_u6zGcZDKZtA0jtvtn1aPlIe7wFAvQNgjI6KDiQsDPTCVeJj_RA441VbV0Z4oX2b68quDY0Gf4VpF4KWfNPdKH6H4E882m8OnBb10mhaNbPxTmDVDZLQZjh3ubX1Z56FNg6cQmz4bEnHF-7X1l7AcNORhzdzgM7uRXhwo9UsAzpu4Io1OCTsb5DaDnng3f3Y9qDn8OG3MI_5IYtm1qGgmY72nSEiIhhPCk2lvmajN6A4tWgUstc7QtdlKEPBd-ITtGdKYTSwqihaHzBQd8D-d_HDqgcOWECLKo51_YqyaEiuGlv6sPon1LMsEL6PlVw47PaGNlcnRJbmZvWKH_VENHgBcAIgALEeaO1E21Ny4UKW4vhKzHg5h1GIGSHjD8IqBvi3PHlFMAFF6MXAvgUX_Rbc04fmdB2TyLG-mdAAAAAUdwF0hVaXtLxoVgpQFzfvmNNFZV-wAiAAuYlrm-5Jg3251TsEdZ8NV11xd4X5O3q0AFLmammw658QAiAAtuzX-04mcxAHq9kO70Ew3vJCOmCS0UvQzZB2CNCeGXpWhhdXRoRGF0YVkBZ0mWDeWIDoxodDQXD2R2YFuP5K65ooYyx5lc87qDHZdjQQAAAHXyRLZ-U2RP1Z-Qw5YicxfbACBQkOhQmgaINAX8QRncb_P0t-rXr8oVpe0xOPBNSutGV6QBAwM5__4gWQEApfbIicKqBydqQsBCsi0P7usxnGQymbQNI7b7Z9Wj5SHu8BQL0DYIyOig4kLAz0wlXiY_0QOONVW1dGeKF9m-vKrg2NBn-FaReClnzT3Sh-h-BPPNpvDpwW9dJoWjWz8U5g1Q2S0GY4d7m19WeehTYOnEJs-GxJxxfu19ZewHDTkYc3c4DO7kV4cKPVLAM6buCKNTgk7G-Q2g554N392Pag5_DhtzCP-SGLZtahoJmO9p0hIiIYTwpNpb5mozegOLVoFLLXO0LXZShDwXfiE7RnSmE0sKooWh8wUHfA_nfxw6oHDlhAiyqOdf2KsmhIrhpb-rD6J9SzLBC-j5VcOOzyFDAQAB',
      },
      type: 'public-key',
      clientExtensionResults: {},
    },
    expectedChallenge,
    expectedOrigin: 'https://localhost:44329',
    expectedRPID: 'localhost',
  });

  expect(verification.verified).toEqual(true);
});

test('should verify SHA256 TPM response', async () => {
  /**
   * Generated on real hardware on 03/03/2020
   *
   * Thanks to https://github.com/abergs/fido2-net-lib/blob/master/Test/TestFiles/attestationTPMSHA256Response.json
   */
  const expectedChallenge =
    'gHrAk4pNe2VlB0HLeKclI2P6QEa83PuGeijTHMtpbhY9KlybyhlwF_VzRe7yhabXagWuY6rkDWfvvhNqgh2o7A';
  jest.spyOn(base64url, 'encode').mockReturnValueOnce(expectedChallenge);
  const verification = await verifyAttestationResponse({
    credential: {
      rawId: 'h9XMhkVePN1Prq9Ks_VfwIsVZvt-jmSRTEnevTc-KB8',
      id: 'h9XMhkVePN1Prq9Ks_VfwIsVZvt-jmSRTEnevTc-KB8',
      response: {
        clientDataJSON:
          'eyJvcmlnaW4iOiJodHRwczovL2xvY2FsaG9zdDo0NDMyOSIsImNoYWxsZW5nZSI6ImdIckFrNHBOZTJWbEIwSExlS2NsSTJQNlFFYTgzUHVHZWlqVEhNdHBiaFk5S2x5YnlobHdGX1Z6UmU3eWhhYlhhZ1d1WTZya0RXZnZ2aE5xZ2gybzdBIiwidHlwZSI6IndlYmF1dGhuLmNyZWF0ZSJ9',
        attestationObject:
          'o2NmbXRjdHBtZ2F0dFN0bXSmY2FsZzkBAGNzaWdZAQA6Gh1Oa3-8vCY8bTrpUHA4zp4UCsbuh36tH09G-qWlvQdoqEQsJJQu1Rz61_mFes9CXE2cxiJV8pEwxtUUTSZQWnamVU1x9bBk07qcHqAuamP_NDAahHhZ9D46q9JklT3aVdhbaZVh0y5b8NZB2eUfKqcUmM0JCxLP9ZfSe7XcVguhQVEduM6Qnl9R1zRh7cquOa8UOEpdXkt1-drsOtrA9c0UJPYzkI8qscCDc-xfzo2xv12tLXjRq395JnynHhjzJIz8Ch2IYQUiMSM6TQDcnvzDEvRgril9NC0aIkHd79omIZNnBjEDfjyqOZbBffjGyvt1Eikz4M0EE8e7N4uRY3ZlcmMyLjBjeDVjglkEXzCCBFswggNDoAMCAQICDwQ_ozlil_l5hh6NlMsLzzANBgkqhkiG9w0BAQsFADBBMT8wPQYDVQQDEzZOQ1UtTlRDLUtFWUlELTM2MTA0Q0U0MEJCQ0MxRjQwRDg0QTRCQkQ1MEJFOTkwMjREOTU3RDQwHhcNMTgwMjAxMDAwMDAwWhcNMjUwMTMxMjM1OTU5WjAAMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAor_6-4WYizZdOQ9Ia_offaIdL2BVGtGDq8jQxo16ymBSOWCP15gZt9QAkqowS3ayqEh48Pg5SdA7F5kcjD_FqKaZDBOqkjvJivdo7FKv7EaUI2al9B7h0pXIRb97jn2z0zPlXz6RV_RmBe3CCljyxrhav7bTkCXEJUnkNgxsWgLGBIW6VSVct0z42xBB6_6mYekWIej5vXLqB8AuzsqnLbU5jOohfJiI5urFso12j6YCWZ_kXK4j8e4IoHUOjWgtHXdb3kP8PvI948hcJpIEpuuLDZDDOCOPI1wAlryGwz_tJLarODZzD1XhG3BMlXi1TG7x1s-AriC3A7B89wuSpwIDAQABo4IBjzCCAYswDgYDVR0PAQH_BAQDAgeAMAwGA1UdEwEB_wQCMAAwUwYDVR0gAQH_BEkwRzBFBgkrBgEEAYI3FR8wODA2BggrBgEFBQcCAjAqEyhGQUtFIEZJRE8gVENQQSBUcnVzdGVkIFBsYXRmb3JtIElkZW50aXR5MBAGA1UdJQQJMAcGBWeBBQgDMEoGA1UdEQEB_wRAMD6kPDA6MTgwDgYFZ4EFAgMMBWlkOjEzMBAGBWeBBQICDAdOUENUNnh4MBQGBWeBBQIBDAtpZDpGRkZGRjFEMDAfBgNVHSMEGDAWoBRRfyLI5lOlfNVM3TBYfjD_ZzaMXTAdBgNVHQ4EFgQUS1ZtGu6ZoewTH3mq04Ytxa4kOQcweAYIKwYBBQUHAQEEbDBqMGgGCCsGAQUFBzAChlxodHRwczovL2ZpZG9hbGxpYW5jZS5jby5uei90cG1wa2kvTkNVLU5UQy1LRVlJRC0zNjEwNENFNDBCQkNDMUY0MEQ4NEE0QkJENTBCRTk5MDI0RDk1N0Q0LmNydDANBgkqhkiG9w0BAQsFAAOCAQEAbp-Xp9W0vyY08YUHxerc6FnFdXZ6KFuQTZ4hze60BWexCSQOee25gqOoQaQr9ufS3ImLAoV4Ifc3vKVBQvBRwMjG3pJINoWr0p2McI0F2SNclH4M0sXFYHRlmHQ2phZB6Ddd-XL8PsGyiXRI6gVacVw5ZiVEBsRrekLH-Zy25EeqS3SxaBVnEd-HZ6BGGgbflgFtyGP9fQ5YSORC-Btno_uJbmRiZm4iHiEULp9wWEWOJIOXv9tVQKsYpPg58L1_Dgc8oml1YG5a8qK3jaR77tcUgZyYy5GOk1zIsXv36f0SkmLcNTiTjrhdGVcKs2KpW5fQgm_llQ5cvhR1jlY6dFkGCDCCBgQwggPsoAMCAQICENBTpEeEh5lpTgeR7VT9oQcwDQYJKoZIhvcNAQELBQAwgb8xCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNWTESMBAGA1UEBwwJV2FrZWZpZWxkMRYwFAYDVQQKDA1GSURPIEFsbGlhbmNlMQwwCgYDVQQLDANDV0cxNjA0BgNVBAMMLUZJRE8gRmFrZSBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxODExMC8GCSqGSIb3DQEJARYiY29uZm9ybWFuY2UtdG9vbHNAZmlkb2FsbGlhbmNlLm9yZzAeFw0xNzAyMDEwMDAwMDBaFw0zNTAxMzEyMzU5NTlaMEExPzA9BgNVBAMTNk5DVS1OVEMtS0VZSUQtMzYxMDRDRTQwQkJDQzFGNDBEODRBNEJCRDUwQkU5OTAyNEQ5NTdENDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANc-c30RpQd-_LCoiLJbXz3t_vqciOIovwjez79_DtVgi8G9Ph-tPL-lC0ueFGBMSPcKd_RDdSFe2QCYQd9e0DtiFxra-uWGa0olI1hHI7bK2GzNAZSTKEbwgqpf8vXMQ-7SPajg6PfxSOLH_Nj2yd6tkNkUSdlGtWfY8XGB3n-q--nt3UHdUQWEtgUoTe5abBXsG7MQSuTNoad3v6vk-tLd0W44ivM6pbFqFUHchx8mGLApCpjlVXrfROaCoc9E91hG9B-WNvekJ0dM6kJ658Hy7yscQ6JdqIEolYojCtWaWNmwcfv--OE1Ax_4Ub24gl3hpB9EOcBCzpb4UFmLYUECAwEAAaOCAXcwggFzMAsGA1UdDwQEAwIBhjAWBgNVHSAEDzANMAsGCSsGAQQBgjcVHzAbBgNVHSUEFDASBgkrBgEEAYI3FSQGBWeBBQgDMBIGA1UdEwEB_wQIMAYBAf8CAQAwHwYDVR0OBBgEFsIUUX8iyOZTpXzVTN0wWH4w_2c2jF0wHwYDVR0jBBgwFqAUXH82LZCtWry6jnXa3jqg7cFOAoswaAYDVR0fBGEwXzBdoFugWYZXaHR0cHM6Ly9maWRvYWxsaWFuY2UuY28ubnovdHBtcGtpL2NybC9GSURPIEZha2UgVFBNIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IDIwMTguY3JsMG8GCCsGAQUFBwEBBGMwYTBfBggrBgEFBQcwAoZTaHR0cHM6Ly9maWRvYWxsaWFuY2UuY28ubnovdHBtcGtpL0ZJRE8gRmFrZSBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxOC5jcnQwDQYJKoZIhvcNAQELBQADggIBAG138t55DF9nPJbvbPQZOypmyTPpNne0A5fh69P1fHZ5qdE2PDz3cf5Tl-8OPI4xQniEFNPcXMb7KlhMM6zCl4GkZtNN4MxygdFjQ1gTZOBDpt7Dwziij0MakmwyC0RYTNtbSyVhHUevgw9rnu13EzqxPyL5JD-UqADh2Y51MS0qy7IOgegLQv-eJzSNUgHxFJreUzz4PU6yzSsTyyYDW-H4ZjAQKienVp8ewZf8oHGWHGQFGa5E9m1P8vxCMZ7pIzeQweCVYrs3q7unu4nzBAIXLPI092kYFUgyz3lIaSB3XEiPBokpupX6Zmgrfphb-XX3tbenH5hkxfumueA5RMHTMu5TVjhJXiV0yM3q5W5xrQHdJlF5nOdJDEE-Kb7nm6xaT1DDpafqBc5vEDMkJmBA4AXHUY7JPGqEEzEenT7k6Wn5IQLZg4qc8Irnj__yM7xUhJWJam47KVbLA4WFu-IKvJrkP5GSglZ9qASOCxBHaOL2UcTAg50uvhUSwur2KSak2vlENdmAijwdAL4LLQWrkFd-9NBwcNwTdfK4ekEHP1l4BwJtkNwW6etUgeA5rkW2JLocXoBq5v7GSk4_CBoKhyiahQGQQ9SZFGeBJhzzkK9yN-yKskcVjjjInSHPl-ZpeOK3sI08sEyTH0gxlTtRoX0MKDsMAHEVToe5o1u9Z3B1YkFyZWFZATYAAQALAAYEcgAgnf_L82w4OuaZ-5ho3G3LidcVOIS-KAOSLBJBWL-tIq4AEAAQCAAAAAAAAQDPtSggWlsjcFiQO61-hUF8i-3FPcyvuARcy3p1seZ-_B4ClhNh5U-T0v0flMU5p6nsNDWj4f6-soe-2vVJMTm2d26uKYD2zwdrkrYYXRu5IFqUXqF-kY99v8RcrAF7DQKDo-E4XhiMz6uECvnjEloGfTYZrVuQ1mdjQ8Qki7U-9SQHMW_IsaI8ZKHtupXNhM5YPQyFbDHHXSE_iyPGh2mY4SR466ouesIuG0NccCUk5UDIvS__OUmNaX7aBrKTlnkMFjkCA1ZDFC99ZQoLFCJQHqnOU7m8zSvTJpUyG2feWgAL2Gl05V3I_lb_v5yELXcihFoA33QIOSpDmKqKV3SXaGNlcnRJbmZvWK3_VENHgBcAIgALEeaO1E21Ny4UKW4vhKzHg5h1GIGSHjD8IqBvi3PHlFMAIBo8rAwJFDGsmQjauX_FCBQenvBa2ApBcR_gOx2qW2QAAAAAAUdwF0hVaXtLxoVgpQFzfvmNNFZV-wAiAAsXPoJSq0uhvU6VLf0uIelHBNFHEanasKAoTp-lQ2dRGAAiAAuO1HPzTRRabZhwPvHQh0b1MnLIG8EVGNfpshASWSfjQWhhdXRoRGF0YVkBZ0mWDeWIDoxodDQXD2R2YFuP5K65ooYyx5lc87qDHZdjQQAAAEOn1tk6ig0R6JqUps9xBy9zACCH1cyGRV483U-ur0qz9V_AixVm-36OZJFMSd69Nz4oH6QBAwM5AQAgWQEAz7UoIFpbI3BYkDutfoVBfIvtxT3Mr7gEXMt6dbHmfvweApYTYeVPk9L9H5TFOaep7DQ1o-H-vrKHvtr1STE5tndurimA9s8Ha5K2GF0buSBalF6hfpGPfb_EXKwBew0Cg6PhOF4YjM-rhAr54xJaBn02Ga1bkNZnY0PEJIu1PvUkBzFvyLGiPGSh7bqVzYTOWD0MhWwxx10hP4sjxodpmOEkeOuqLnrCLhtDXHAlJOVAyL0v_zlJjWl-2gayk5Z5DBY5AgNWQxQvfWUKCxQiUB6pzlO5vM0r0yaVMhtn3loAC9hpdOVdyP5W_7-chC13IoRaAN90CDkqQ5iqild0lyFDAQAB',
      },
      type: 'public-key',
      clientExtensionResults: {},
    },
    expectedChallenge,
    expectedOrigin: 'https://localhost:44329',
    expectedRPID: 'localhost',
  });

  expect(verification.verified).toEqual(true);
});

test('should verify TPM response with spec-compliant tcgAtTpm SAN structure', async () => {
  /**
   * Name [
   *   RelativeDistinguishedName [
   *     AttributeTypeAndValue { type, value }
   *   ]
   *   RelativeDistinguishedName [
   *     AttributeTypeAndValue { type, value }
   *   ]
   *   RelativeDistinguishedName [
   *     AttributeTypeAndValue { type, value }
   *   ]
   * ]
   */
  const expectedChallenge = 'VfmZXKDxqdoXFMHXO3SE2Q2b8u5Ki64OL_XICELcGKg';
  jest.spyOn(base64url, 'encode').mockReturnValueOnce(expectedChallenge);
  const verification = await verifyAttestationResponse({
    credential: {
      id: 'LVwzXx0fStkvsos_jdl9DTd6O3-6be8Ua4tcdXc5XeM',
      rawId: 'LVwzXx0fStkvsos_jdl9DTd6O3-6be8Ua4tcdXc5XeM',
      response: {
        attestationObject:
          'o2NmbXRjdHBtZ2F0dFN0bXSmY2FsZzn__mNzaWdZAQAVTQGgcWtxs9VV4i1gQTcdXfoyZwupUnZjebIIzuq77nBe_EyxS4Fh8Go2vCdVnpHLXHsVct1ISZ8fmSB31YrnuaHpvxjTN-k0t3ynOwJY9SZd4uxX9KQUOMpjhWsQczpNL72J7wd4VckeU6oHvq-z9x6Oqfk1KbmzRu-ZdrUikYkM1uCXqk9h0P1MpeaoxFoLiS-2Vz1MZENB2-N-tC_ljwoUsAOBiE3MRfp2e_LCe4oRWCvhJn7qiVglQOnQWTtoky_FOKqJtPqt59v74C3rin8reNmNwXD1l0XljOYQaujLOMGut63CwtlpAgBN8IPHNWnukzv0X5VY0KjBT6DbY3ZlcmMyLjBjeDVjglkFxDCCBcAwggOooAMCAQICEGoHJ5pU80VnnGzPa5PrxlkwDQYJKoZIhvcNAQELBQAwQTE_MD0GA1UEAxM2RVVTLVNUTS1LRVlJRC0xQURCOTk0QUI1OEJFNTdBMENDOUI5MDBFNzg1MUUxQTQzQzA4NjYwMB4XDTIwMDgyNzE1MTIzMFoXDTI1MDMyMTIwMjkxNVowADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKkVhLA9cKyViKaVr6wwKqzty1AKR0VJGa3BB3QF7IfK81mfqv-x31Y0V0zPioxYgPHHfF4j4XPm5mVlQI9PluM828elk86kwPV-OFlhIX7nM1Hy9NQtgnfyV-7Kxmb3pKe2TI937XrtuJj0pKUav3g0RtPUZDywpWBVDCI4AopqLVyys8bse_bZdDI-l8IDqpzptL1kfmH2WG6rtCIyVimGQS3UtgkNpl-8FeDXOc3ciAYdY9MUHfE6QmFpwXn_qo_4x0VR1wiBKyK0ZACTAm96io_iskeyig3OGR_SEd2OeThYQtoJoAfZvBzSs3eTVTAsZ8unKnGjkss7eCF48Q8CAwEAAaOCAfMwggHvMA4GA1UdDwEB_wQEAwIHgDAMBgNVHRMBAf8EAjAAMG0GA1UdIAEB_wRjMGEwXwYJKwYBBAGCNxUfMFIwUAYIKwYBBQUHAgIwRB5CAFQAQwBQAEEAIAAgAFQAcgB1AHMAdABlAGQAIAAgAFAAbABhAHQAZgBvAHIAbQAgACAASQBkAGUAbgB0AGkAdAB5MBAGA1UdJQQJMAcGBWeBBQgDMFkGA1UdEQEB_wRPME2kSzBJMRYwFAYFZ4EFAgEMC2lkOjUzNTQ0RDIwMRcwFQYFZ4EFAgIMDFNUMzNIVFB4QUhBNjEWMBQGBWeBBQIDDAtpZDowMDQ3MDAwNDAfBgNVHSMEGDAWgBS4X9VnypLEDs8M2B9tPwNVbzimUTAdBgNVHQ4EFgQUSk_obuVTgSLFuag0uCvjqcyeFPIwgbIGCCsGAQUFBwEBBIGlMIGiMIGfBggrBgEFBQcwAoaBkmh0dHA6Ly9hemNzcHJvZGV1c2Fpa3B1Ymxpc2guYmxvYi5jb3JlLndpbmRvd3MubmV0L2V1cy1zdG0ta2V5aWQtMWFkYjk5NGFiNThiZTU3YTBjYzliOTAwZTc4NTFlMWE0M2MwODY2MC9hYmQ2MTVmMi0xNThhLTQ1OGUtYTE1NS03YzRjOGNiMTNjNjUuY2VyMA0GCSqGSIb3DQEBCwUAA4ICAQDYZJbtNQICOEg3N3UULml0qfQyuitzuVZJ59nvhhwHH6SsWLXhoZVgKaV3zOd00nJPVnX8uilmX2o9qkNi1ODO7WQ-wN2_jVtNsVDu1mgox6T6NeWzel-EbJdkg2kiwUaO639Yu_Xc8FUKNtUp-9fuF2p31uoYo-Nw-H58rbYOdsiOQ-SPYI4zbdjssntKyI6MAT_j1KAKv0Gbh5SvKM4aEmZA0v0dHXuxoH6kFVHLeNdwLe0cG__K9rCw5CKOD0zFMnKRx6LfNzaZ0OedM9skVjHPqR3qEfwGFXQzrfVGFzrri2vaE9bo2Q-cREY6ITX6kUJpkSc6Iz96hxpSxyIxN1faSeblMETRJD4pV0PtJGZb4GOeng0lQ8l4IkBlBgx-I27Ks_tTsf2owNkVOWTViWZLYLon0l_LhNKuuGJkjB0whvccBB4DiQPTckuCeFoB8IH5wAR__A_y33_zBR0fYWnVlEXWwtMO-vGRYQLPuK6j30MWBjPEvtujsS1gwJUhXnd3GENHaXtrQHnyZgLzRCHSeJy6SjI64Jm86VMMalvLJEbGrvjfs-vKnBKAoK_9JcK-tmx4pIJIm1gtOx-J59bfpLjgueBqpvVl3dz1r9dCXrRlsCCeqtXOFPK5lgJz3sxXyDxAT-Np52S1pfrui1i2VvnHB-YEM83nubdz01kG7zCCBuswggTToAMCAQICEzMAAAI5-btqHUlkR38AAAAAAjkwDQYJKoZIhvcNAQELBQAwgYwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xNjA0BgNVBAMTLU1pY3Jvc29mdCBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxNDAeFw0xOTAzMjEyMDI5MTVaFw0yNTAzMjEyMDI5MTVaMEExPzA9BgNVBAMTNkVVUy1TVE0tS0VZSUQtMUFEQjk5NEFCNThCRTU3QTBDQzlCOTAwRTc4NTFFMUE0M0MwODY2MDCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBANviI_mGj6lxn4v5fOlFLVlWXpb03ZoSzZAaDLUDvwm-v_dVUug5TL4qKIh4OafL-UxV0jGWO0ii8_bTGoF_kGKr7FrHoH-BMiebKXV9HpbF-g584GCWesqUuuayad3EfbvTxLRuAIYfnSXorscQhNzANCRu9_zdPTJ6Q5bWyHv0mz2nHrpN0Ds9hJrRJSJdAESwWbdAxaNTU6-Pnv2PHgLTT_cJzsXGcVzp6Hq1a6S_C9m2-iSwzVIiHX7oFS8eXqLs06gCd7lVms_M1wggpdo5mjB2kDenYN8YEmUXqt1I1RIdTINdgQcdGIFAVWCPo2s0HtXmz1Jzd0pQTxsPOcMNFvm7THf2Tqyc_ui7UqUKDpvwDe_7b4k0fUfsFGr0CuFgRHN7oKtbjEOmBUJhRqoc9ewshoUhmd9FjvTRHvvNm5Qy4KDMT62uRIuGJ5H-YJ_yYzBsXY28q9T1orJ06NSV8tYDi8mjUudjBWRQ5QpqoGxQzTeYqIcCOFtsAmk9H5V0TUZ2Kp1i1Mcb-TGmUe57yORuOs9PT0mK9U8lkyMC73mmJ75a53S316jBrlWIpMdNt2Lw-Vu_R1v-zAuJGWVLb99PfU2WQg0qob0-cJK6yFnVHTqYU3WmMshyA0ZfXBOk28dVNSINxheFvUZL-h5Jwv4e-WKJVoTfoPv9k6QlAgMBAAGjggGOMIIBijAOBgNVHQ8BAf8EBAMCAoQwGwYDVR0lBBQwEgYJKwYBBAGCNxUkBgVngQUIAzAWBgNVHSAEDzANMAsGCSsGAQQBgjcVHzASBgNVHRMBAf8ECDAGAQH_AgEAMB0GA1UdDgQWBBS4X9VnypLEDs8M2B9tPwNVbzimUTAfBgNVHSMEGDAWgBR6jArOL0hiF-KU0a5VwVLscXSkVjBwBgNVHR8EaTBnMGWgY6Bhhl9odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQlMjBUUE0lMjBSb290JTIwQ2VydGlmaWNhdGUlMjBBdXRob3JpdHklMjAyMDE0LmNybDB9BggrBgEFBQcBAQRxMG8wbQYIKwYBBQUHMAKGYWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljcm9zb2Z0JTIwVFBNJTIwUm9vdCUyMENlcnRpZmljYXRlJTIwQXV0aG9yaXR5JTIwMjAxNC5jcnQwDQYJKoZIhvcNAQELBQADggIBAEGq_ihs92tT3nfAgFCU2dtGjmqTqRA3Jx_1cPGoz6FFhirdj7i1webPivoyoUu3pL8KSMtCY3HBlrk6N4QOJDnrWM49t6lEklm5_9sYvmpe587vuEBTr8Gb-0KZfp0FK3EKenpE0THK8F90hanivMgMrVfR6UiQiFeG18XJ5rJeXxPcEH_fY4rVnpDCdVMeaBcrAykVA8WMZj6uvUoyflmJC4TC2ZD6AiKQjZy2DE3hKHbXgsM2wqMqUuX-PI_jS9pq28B6PFf6hY_7YsOhOM6E8roS9DAqSpSpNSx9EcdoH0eqV0MGcHmMtjtdV_PzwCzF3kGZ9t1ViuQTysnsaZMTSPBf2i79-6kbkt5JcTeMP8IICoMl8W4K41WFlpotosCh7v4jO2kiA_3Mit20U42EpqzgHgfl1_nLueOat4RwoZPWAh7-2yh899Rib4B1yNg1JgzLhO27ld9_1bsAlpcy57roKbUaUYG7BNEhdjRtHpOWH5ZTX1ye852CHDk2Wa7JPFNKZ2Vuv6asPtqyp2MHF-Fb2moxn_u06qGXCG6yaPNydpnoAEaIJuE8Byt4Sdp5Or1vylygqO00zNsT4lGbPQOsx_Yy4RFd4cX9nnrNBrnm_OADMfRKqTt5AbBkaJ9udqHM7BdBndRbTp3lRtRrYCojtXqJfCeWZZdW7JjjZ3B1YkFyZWFZATYAAQALAAYEcgAgnf_L82w4OuaZ-5ho3G3LidcVOIS-KAOSLBJBWL-tIq4AEAAQCAAAAAAAAQC0ciFRFbWRy-FM8K7FKCWx1xQ9lkpjErkYnun5Fbu6h8OeXpPdngMam85Kf56JRuwKPtwz-cToz-wjjQ7Bpg--EaBE4_WEoQc6lfEoShDSAa2gvf1rKhOoe4quaRu3lxpqGCp5qRSbKET3SWYSphrfo6AD_qQ2X8safYhnRb7WatyTP42qKCwzWX0J4JovMG4d_zteT1q3wljbp2XGxcF9qPTHhqSjj2h20DeP4dDS-TZzLsytSYCswpBE-WvEElcIslIhmFdmnbRY5UMECR9tkyp3NfwHBGqP_uZVwilxRC3rVTuGWSNm9pdqrgADnLftVeKSNGU22tnMxyNb-4MVaGNlcnRJbmZvWKH_VENHgBcAIgALI_9Gp39SuKvSJvllxwHyGHhtaaF8TtuCHdfJEBqgCJQAFHAs7LsTg6ywAmOxET_5IxypMjRjAAAAAAKIAWoDEFBLdFFCfQE1hhRhFj_igAAiAAsbzG7XFehetxw_1Xqqsm9xjRGD8dbXDYq2q0yK2hdJagAiAAvbuEFNLlj6-ytEKRA8KlzE-x4DlyoBuskc-iQXv4NZ52hhdXRoRGF0YVkBZ9Ukck8V92UT5YFZtBoVSQZWyFTM-rDMTOAW1DLfg1hnRQAAAAAImHBYytxLgbbhMN5Q3L6WACAtXDNfHR9K2S-yiz-N2X0NN3o7f7pt7xRri1x1dzld46QBAwM5AQAgWQEAtHIhURW1kcvhTPCuxSglsdcUPZZKYxK5GJ7p-RW7uofDnl6T3Z4DGpvOSn-eiUbsCj7cM_nE6M_sI40OwaYPvhGgROP1hKEHOpXxKEoQ0gGtoL39ayoTqHuKrmkbt5caahgqeakUmyhE90lmEqYa36OgA_6kNl_LGn2IZ0W-1mrckz-NqigsM1l9CeCaLzBuHf87Xk9at8JY26dlxsXBfaj0x4ako49odtA3j-HQ0vk2cy7MrUmArMKQRPlrxBJXCLJSIZhXZp20WOVDBAkfbZMqdzX8BwRqj_7mVcIpcUQt61U7hlkjZvaXaq4AA5y37VXikjRlNtrZzMcjW_uDFSFDAQAB',
        clientDataJSON:
          'eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiVmZtWlhLRHhxZG9YRk1IWE8zU0UyUTJiOHU1S2k2NE9MX1hJQ0VMY0dLZyIsIm9yaWdpbiI6Imh0dHBzOi8vZGV2Lm5ldHBhc3Nwb3J0LmlvIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ',
      },
      type: 'public-key',
      clientExtensionResults: {},
    },
    expectedChallenge,
    expectedOrigin: 'https://dev.netpassport.io',
    expectedRPID: 'netpassport.io',
  });

  expect(verification.verified).toEqual(true);
});

test('should verify TPM response with non-spec-compliant tcgAtTpm SAN structure', async () => {
  /**
   * Name [
   *   RelativeDistinguishedName [
   *     AttributeTypeAndValue { type, value }
   *     AttributeTypeAndValue { type, value }
   *     AttributeTypeAndValue { type, value }
   *   ]
   * ]
   */
  const expectedChallenge = '4STWgmXrgJxzigqe6nFuIg';
  jest.spyOn(base64url, 'encode').mockReturnValueOnce(expectedChallenge);
  const verification = await verifyAttestationResponse({
    credential: {
      id: 'X7TPi7o8WfiIz1bP0Vciz1xRvSMyiitgOR1sUqY724s',
      rawId: 'X7TPi7o8WfiIz1bP0Vciz1xRvSMyiitgOR1sUqY724s',
      response: {
        attestationObject:
          'o2NmbXRjdHBtZ2F0dFN0bXSmY2FsZzn__mNzaWdZAQBMnSMdxY37f_0LOaAG8xlNt7_nPGgoF3G408AioITizIxAV7Aw83VZ9QVr6jvDKxM6yYLqifi4LaDPoZPMy-AbSv_puqVYRY72vbFUgbxGhwI93kDCbNrzj69NWnbhBIEwuHjjmyAkDxV7KRqPLxW4k3aUQY_wKJsrW_7DTEBKYZaN53MaReUtXL6oVonxHus_-yXR9FOPfXAMp6kEuQyjRVhWKhK6xouCvHOrFgzqfuKYZlXxLEZaT3-_SStsp4y1FV6NGqP352_snv6GRNam0yiFQyKWVq0_zBSZsHDyD5m4iTEKVgf1roS06hpg9OHzvmTeLoZe2WRSUEjZRyUbY3ZlcmMyLjBjeDVjglkFtTCCBbEwggOZoAMCAQICEEnuVsM4O0FbonTm_N1as6UwDQYJKoZIhvcNAQELBQAwQTE_MD0GA1UEAxM2RVVTLU5UQy1LRVlJRC0yM0Y0RTIyQUQzQkUzNzRBNDQ5NzcyOTU0QUEyODNBRUQ3NTI1NzJFMB4XDTE4MTIwNDE0NDMxMFoXDTI0MDgwMjE3NTE1NVowADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKthunww9tiuyc49Pnx67T9sQDJL9_33-0Lm9xMsQHI6MF9S62wL-j5Ex0CQwPLH9IoNmfguA-2mUoxG1VaIkWs8RQ0hQSZu87x7bm_kiPk0mm_y4PG5wrc6RxiNdElh8cdUlIrq_Oqjhf6u1yj5rJ-Nm3huHnRNKE5fD_BnOylgD6YY2quGbv1Q5VbmjdVg29gIfZElD7RRUsVnNIgTFSnjTZbQeWBMUlH-uYLfZduKTPMseBR0boKqQAT5O-tBrlXSWQ303RdBh-UUu-EllwWZ6mM-pBf_G7rsSWGDk2t8BHgIk-rh1t_bzwDiAAyStr8Ec2IziqP-cXZFsZ2dEa8CAwEAAaOCAeQwggHgMA4GA1UdDwEB_wQEAwIHgDAMBgNVHRMBAf8EAjAAMG0GA1UdIAEB_wRjMGEwXwYJKwYBBAGCNxUfMFIwUAYIKwYBBQUHAgIwRB5CAFQAQwBQAEEAIAAgAFQAcgB1AHMAdABlAGQAIAAgAFAAbABhAHQAZgBvAHIAbQAgACAASQBkAGUAbgB0AGkAdAB5MBAGA1UdJQQJMAcGBWeBBQgDMEoGA1UdEQEB_wRAMD6kPDA6MTgwDgYFZ4EFAgMMBWlkOjcyMBAGBWeBBQICDAdOUENUNzV4MBQGBWeBBQIBDAtpZDo0RTU0NDMwMDAfBgNVHSMEGDAWgBSXoaSHgAGBlZpmNVWMWorDDDTnbDAdBgNVHQ4EFgQUNpU3wQ-ymfXFsSeKJivavvm0NoswgbIGCCsGAQUFBwEBBIGlMIGiMIGfBggrBgEFBQcwAoaBkmh0dHA6Ly9hemNzcHJvZGV1c2Fpa3B1Ymxpc2guYmxvYi5jb3JlLndpbmRvd3MubmV0L2V1cy1udGMta2V5aWQtMjNmNGUyMmFkM2JlMzc0YTQ0OTc3Mjk1NGFhMjgzYWVkNzUyNTcyZS9jN2M2MWY2Yy0zZmY1LTRjNzgtODhhZi1jM2NjNWVlNTU0MjQuY2VyMA0GCSqGSIb3DQEBCwUAA4ICAQBIGXtiamv37X-HbgGFFLD5bLBR2rMeEWwi1gKyJF-0k0H-q0Cb0TiBuy-ITn2xnT3XszN7KB-ur0UH9VLhOR9F2ZxNyTB6ppV7HMleWW99ntsLKtJh3bLsIXIUZa8tLzpXqSKCgV4DfqS2OqcFDBTLG_uRmn8EmJevn13D8WEkOn0uJJGOwbpdF7gYrm_wvVJhYlAxd06s3OpFIDHlc-2JD5OezsPUQyMIV2A-pLEObldwTy0ipSlXbCQuLm5QFKklfv9lX2m4ewcp_lQ-metaSlwFUE8YOSUMe-K4Nf3gErzKhuWbDge7hE7CeyhG54BCeRdJsu56npQy_YhoRoh-iWeNkr8_RypFbKrZFLhOIt3rMQaFmKHyERl5zP8tRJM9bTB0upA3xj47cdQQ1ANDP0nrTJYhOFYo26O5Ds1GuqgMztoMAIVwA2flfKAcmjGy7aMEEjjbcAPxcYfEK9www4lJwynmOvARr7q02Ugt-GGZ6W9CzUcWuy6E5EPXzjoFDeGO947CMiwstIejsNv-1-BZH20De46BmxGsX09Ul97Y7C-v-ur7iwMWTMreK4o_KPlxgOzZRE5XPm8LbCXDgc7itZwjMxlyxX21_dsAYOTkTIbXdaxxUB1wxHxLPRJ1OKnTtJPOJPU3ZmDjNHWsZ6sVA_8XhSlV33a-RtZ6w1kG7zCCBuswggTToAMCAQICEzMAAAF66OtVQiSrVRYAAAAAAXowDQYJKoZIhvcNAQELBQAwgYwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xNjA0BgNVBAMTLU1pY3Jvc29mdCBUUE0gUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxNDAeFw0xODA4MDIxNzUxNTVaFw0yNDA4MDIxNzUxNTVaMEExPzA9BgNVBAMTNkVVUy1OVEMtS0VZSUQtMjNGNEUyMkFEM0JFMzc0QTQ0OTc3Mjk1NEFBMjgzQUVENzUyNTcyRTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMYsxZ359XoMjiejLk91WORXnA9uJHMrGj9E6yJd8B40cklR1twW96826fgdMMwFPI6fXsYM7PuX8mcqDGLCsiPFTuoXQRPBn2VEfZEpTl9yhYBRs2as4vpF4oOcs2KCU6730Czeksc7Fi9ZdLWs_hqn4wkrql6cv9e5fh3_BSTvW0x795FLu7pd0jq1FA9oQMvZ921RZkP4X_Js3LtVQUPOYJ6YzBGdh1SoKp5PpL-FkEM2zkd1BXdqXlUrTfNPJvJweT1CY8C1cRWZtZlkkmsqWpcTnFKTnu2oMCxJXiQsuGrZAu4lZmOLacDRNa3DPtJdQYVBiZ9lHk971jBws9HiXmVX0s4Fk8RVqEBcSyU7fUfpuyu2wruFgJD32To1LbwvWGanrBhkCT-fVpf_DhKwwR9azH-FfzZ9weh_776GHTIQmF2jky4BD6fSIzB0U-l5BN_v0_2uo2kHEaz9TlFh4xgzUcFlreY0VODYWbmMAdWlyuN3C7XP4fwBVbtrA-c_TSa_CuqFIqfFcPCniih-4ajCBQ5dwPLNri5hfQPL8RJsX0KHs0wBA_ADf8O2S48y3K1R8RYIz8ENckNwzFP7Ke3ZCzFOfNPaeDh0ceFqRecEO_q4eiwig_pciMIRecMeJiT12O_phJUKWJdD3P1p--SBuVZ7yPD0FGj-aQn1AgMBAAGjggGOMIIBijAOBgNVHQ8BAf8EBAMCAoQwGwYDVR0lBBQwEgYJKwYBBAGCNxUkBgVngQUIAzAWBgNVHSAEDzANMAsGCSsGAQQBgjcVHzASBgNVHRMBAf8ECDAGAQH_AgEAMB0GA1UdDgQWBBSXoaSHgAGBlZpmNVWMWorDDDTnbDAfBgNVHSMEGDAWgBR6jArOL0hiF-KU0a5VwVLscXSkVjBwBgNVHR8EaTBnMGWgY6Bhhl9odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQlMjBUUE0lMjBSb290JTIwQ2VydGlmaWNhdGUlMjBBdXRob3JpdHklMjAyMDE0LmNybDB9BggrBgEFBQcBAQRxMG8wbQYIKwYBBQUHMAKGYWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljcm9zb2Z0JTIwVFBNJTIwUm9vdCUyMENlcnRpZmljYXRlJTIwQXV0aG9yaXR5JTIwMjAxNC5jcnQwDQYJKoZIhvcNAQELBQADggIBAEqoI0tBP2Uurjlmgo7niM4MoXT6KvQlJgw0XcON1g0SGZ-WTZk32GqPE7TZqgNEVMuZwCimfwpTPKpbMagnZBIIIsROJbZFjr8q-pKpPdYjkkVrhmMlOW0d1xe0vl4xsc-6AwQ5MPh9qdmbXgIQwpDUIzOIT38pChX26a_cdkYOlzbSw4gZRtQey4-AakazI3MXQCozvhXOqZ_9e8kdXPtdsCpkE52vopdGAtT0Iqyhb3pFMmIngsYpqpozrGEe8XlAWf7fNTzUR-Zm_0FqhaoDc-w0VxRR7DF-pcHZU-Mm8p7iDLtF8IZ6usayci7nCg3ySdbiLnV0onmX5vu5ieMG-pL_4RUpbhmdlvIK01wpv2tS9oWMVWvW-Vw-9TnkA24k9wt6HuO3ib3s9yK-IabREUv6XNkKJUE5wZNo_0HxO1IM9EoWgNC0QLMoNvUzxNBAy6HwG0ZycyOdG1bnkwMU7gUHOGBVti_FB9Rto8Tp0lhUQgv8-tgMmBcz7A9hkmiU0asN3Z4d-e0vh_rti-pjKHTIzpEUU_Tjo-NTdqBIrYjraBCzt5rZiywS8v6AlgA2yUkADAxtUNScmI6oS4AzqrK-B7Ho7qlrvHiGDToPopFuKZcjCZ2-R7NB9oVYEQbHyB6TnNxRwtpkzDxb2HxA_hbMjlEse4S5QWJ4sfxkZ3B1YkFyZWFZATYAAQALAAYEcgAgnf_L82w4OuaZ-5ho3G3LidcVOIS-KAOSLBJBWL-tIq4AEAAQCAAAAAAAAQDJlNoI1XRkd1Kjb96EePqyqRpGV9w0YKU6U2TyDC8TBKiYzwRw3Ti0EGjLC_P2j2o-wDyQ9RqEvWSRv7dqNzNLRqrmxNJMvmQi2vk5hzebrezXycTpdvHhIO6C9FMGpjHNXU2SPD_4cY8W_SqVrDsjlF5DuEHP0TFvKfTrSJFZ21SKL48i9NYYGkNdU1S5Kr8oAPORAoQT-V6o_fOxMfslJNuy3tb_FIAGmVILBcWStB9hw1EzC0fRnDoI4tDT-_6BBsz6TYusEP4SQ4ZaQAkbQE1-jSTmrTheF3a8V6cPNV43DfzdVLsB74EI8wlZ86SJtyD3260FsWgf40sSJie9aGNlcnRJbmZvWKH_VENHgBcAIgALhmPuuXQ7HvLV4hOfrw_55-GR3psNmE_1QZP-_YPm5c8AFJoQlUV8EpmxuKaMJJlKHuIteMImAAAACfwkGZwWlFVa2k-cxAEPaQm9qoC4lAAiAAuuRckOKcJwFIRO3XLsLgJibml10dsxQtopG9n2H2B-KQAiAAuPaG6tGwNMsbWqXu9ba1tgsNEKnl3wFJE1Q2ktcCD2O2hhdXRoRGF0YVkBZ0mWDeWIDoxodDQXD2R2YFuP5K65ooYyx5lc87qDHZdjRQAAAAAImHBYytxLgbbhMN5Q3L6WACBftM-LujxZ-IjPVs_RVyLPXFG9IzKKK2A5HWxSpjvbi6QBAwM5AQAgWQEAyZTaCNV0ZHdSo2_ehHj6sqkaRlfcNGClOlNk8gwvEwSomM8EcN04tBBoywvz9o9qPsA8kPUahL1kkb-3ajczS0aq5sTSTL5kItr5OYc3m63s18nE6Xbx4SDugvRTBqYxzV1Nkjw_-HGPFv0qlaw7I5ReQ7hBz9Exbyn060iRWdtUii-PIvTWGBpDXVNUuSq_KADzkQKEE_leqP3zsTH7JSTbst7W_xSABplSCwXFkrQfYcNRMwtH0Zw6COLQ0_v-gQbM-k2LrBD-EkOGWkAJG0BNfo0k5q04Xhd2vFenDzVeNw383VS7Ae-BCPMJWfOkibcg99utBbFoH-NLEiYnvSFDAQAB',
        clientDataJSON:
          'eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiNFNUV2dtWHJnSnh6aWdxZTZuRnVJZyIsIm9yaWdpbiI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzI5IiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ',
      },
      type: 'public-key',
      clientExtensionResults: {},
    },
    expectedChallenge,
    expectedOrigin: 'https://localhost:44329',
    expectedRPID: 'localhost',
  });

  expect(verification.verified).toEqual(true);
});
