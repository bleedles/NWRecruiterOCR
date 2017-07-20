'use strict';

// Rename this file to local-NODE_ENV.js (i.e. local-development.js, or local-test.js) for having a local configuration variables that
// will not get commited and pushed to remote repositories.
// Use it for your API keys, passwords, etc.

// WARNING: When using this example for multiple NODE_ENV's concurrently, make sure you update the 'db' settings appropriately.
// You do not want to accidentally overwrite/lose any data. For instance, if you create a file for 'test' and don't change the
// database name in the setting below, running the tests will drop all the data from the specified database.
//
// You may end up with a list of files, that will be used with their corresponding NODE_ENV:
//
// local-development.js
// local-test.js
// local-production.js
//

 //For example (Development):

module.exports = {
  sessionSecret: process.env.SESSION_SECRET || 'youshouldchangethistosomethingsecret',
  box: {
    clientID: 'pliuq91h3fvde19ts9aimtazrs6ttpj1',
    clientSecret: 'qaubf0tEaOtkbomSZbeI8ehZkggTzWt4',
    appAuth: {
      publicKeyID: '9djwytah',
      privateKey: '-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIB9aMVTN3AAcCAggA\nMBQGCCqGSIb3DQMHBAiQMgDReWJnSgSCBMjwFYJFQxeCltdZeOTTpJT3tRoYS6y0\naw9F/tvuJ4v1h3Hi2QF58gHMcxMlGB+AORM/XXsLlPXEmbktlHuYGdE99Z68l6CS\noSK43tJxC48o7HKodUwcm0KXWlcJ6Bgf+YU4LHehTuT2XbX2pjJI65FHRLnVLKyY\nn1pRQ4EhBtG58m0KdPNrZ6hEe0wZwGPppoT6rG9+/1TTMF3fQ52vmJpFgksXqThK\nRh7hkeypQ+/NS6kQ/L1ib7E+EM/3BIrnOT4hbUbQjULWNGvSobBEwGgbRu1HYd3Z\njKP24wZXo2IoW5+5wLofQXJqn9nJHAu5I2W+uhlkLJ/p+vJbDbdiNLSs1aqo4WMc\nuAijZRPXrKUaGHTy+YQx47fv7JJ835uXRdmYl4837eDLFZQp5HWgexBPotMVGqhl\n1Vqv9nkrru8bcvCyioyCZPcSvD54Vo8AiusZge32EHtox5tO9oP/z6zl6pTB/ZMv\nVHKz2oiJPG9v+UwzqoGJX48IZLPaWfHJutP4lygJ0ZR5Ij+ls5E4y+ypZ/33QzN4\n7zWEU/E/k7lO+Hy5OjTAlRI7dbns0gH1zag0IZfcQaf1XUZtfDuHloQ3jXNKdL2j\nUMMOuvjYYILwg0JK/iF+gQsAgkF/JfmI/Fy+6tjV6TkSQasIm+XfmmRgMXqbqLp8\n5b6o7L8pl3eqIu8rznUPQiY9e7utTMEXF3nVzIvhZw860+8DD9CaUhu7KRYhmko8\n0iPnXZSFH5TIuDg3K30kjO+sUbXm5NmmOUalljWoQr5cyETNulUnfxV9j461Q5ov\nPHVcjywmvAftBsgblRDtaMw45Oxfw3Uj3QlhY2x37tvCAxdacfPWqB7CkCzu0GB6\nDbAVPHCv4j+iSRoMnxtrfzLnzyc8Jl0QfnUVTfWBw1vtxggHybiwPHsmTkrgVNjR\nY01n04uihjQbhdVPWVfNt/w4B+e3GwrxMDOrlfx/38eaOuvnZCev8m6o5rBnC8Pw\n9xyOy4r2kbkQ8SHrQkcOSaL3fDwqfBCYNr1biKnWER0xuhxVVB+T+0jUCv+/h2h4\n3/CKmnlnhEFQ2vqkVF/EN7SouJpA1b34nHjZLkm2aqH5Cy9NqDPKqfN8ohKBkkgM\nX+9ttlKZqGUdDEuyGk2xAR39MTFBOb/bg44Vd0cnf8Ss1H3bVvE2DDw+S0gyEBe/\n3b3xzvK0kn6O1zWl1zB+H0Qs8CJF8QY8alXERaBmNv9ayuqdOOMhZ2AyURIkhY30\no0xch1iGPTE2SFidYhDHtMHTSpF95bB3J9TxP3ZwiB0EYn4cqdrVn7BQJLVjmyJu\n3HhmFLZQf/oHrt9cmhF9nSyi8gUazotXWvZMxbVuHkzPBGEhl4t+uGhxGbyNO/d4\nzaGOFhGMA4qyJDyju4Tk7r+Q+xtL8K2uD0/VazGgrxGyEM5JNc/9EF7l9guIySNI\nZl7vDysa68KIk+7T7SWC+WhK6WHTmBKS8nktE98oW4+GWWzyR4gsGF39a+sFX8NQ\nSFwW0JsGATtBhG2MmkX+rGbC9DL/3SEa6tiUSZncGHGkeYUQQX19eyrwHOO5xR1g\n3SZRmwjmiJiRdQzjOlq/3Gspgq8oDfF1lZqkDb2N+etGhaNOfVEZv+fzVkjf/d1z\nOF0=\n-----END ENCRYPTED PRIVATE KEY-----\n',
      passphrase: 'cb01c6d7d7a4673c2336de14948bedb2'
    },
    enterpriseID: '16885475'
  }
};

