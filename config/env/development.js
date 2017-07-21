'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean-dev',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  keywords: ['java', 'c#', 'javascript', 'sql', 'angular', '.net', 'mongo', 'azure', 'aws', 'python'],
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'dev',
    fileLogger: {
      directoryPath: process.cwd(),
      fileName: 'app.log',
      maxsize: 10485760,
      maxFiles: 2,
      json: false
    }
  },
  app: {
    title: defaultEnvConfig.app.title + ' - Development Environment'
  },
  box: {
    clientID: 'pliuq91h3fvde19ts9aimtazrs6ttpj1',
    clientSecret: 'qaubf0tEaOtkbomSZbeI8ehZkggTzWt4',
    appAuth: {
      publicKeyID: '9djwytah',
      privateKey: '-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIB9aMVTN3AAcCAggA\nMBQGCCqGSIb3DQMHBAiQMgDReWJnSgSCBMjwFYJFQxeCltdZeOTTpJT3tRoYS6y0\naw9F/tvuJ4v1h3Hi2QF58gHMcxMlGB+AORM/XXsLlPXEmbktlHuYGdE99Z68l6CS\noSK43tJxC48o7HKodUwcm0KXWlcJ6Bgf+YU4LHehTuT2XbX2pjJI65FHRLnVLKyY\nn1pRQ4EhBtG58m0KdPNrZ6hEe0wZwGPppoT6rG9+/1TTMF3fQ52vmJpFgksXqThK\nRh7hkeypQ+/NS6kQ/L1ib7E+EM/3BIrnOT4hbUbQjULWNGvSobBEwGgbRu1HYd3Z\njKP24wZXo2IoW5+5wLofQXJqn9nJHAu5I2W+uhlkLJ/p+vJbDbdiNLSs1aqo4WMc\nuAijZRPXrKUaGHTy+YQx47fv7JJ835uXRdmYl4837eDLFZQp5HWgexBPotMVGqhl\n1Vqv9nkrru8bcvCyioyCZPcSvD54Vo8AiusZge32EHtox5tO9oP/z6zl6pTB/ZMv\nVHKz2oiJPG9v+UwzqoGJX48IZLPaWfHJutP4lygJ0ZR5Ij+ls5E4y+ypZ/33QzN4\n7zWEU/E/k7lO+Hy5OjTAlRI7dbns0gH1zag0IZfcQaf1XUZtfDuHloQ3jXNKdL2j\nUMMOuvjYYILwg0JK/iF+gQsAgkF/JfmI/Fy+6tjV6TkSQasIm+XfmmRgMXqbqLp8\n5b6o7L8pl3eqIu8rznUPQiY9e7utTMEXF3nVzIvhZw860+8DD9CaUhu7KRYhmko8\n0iPnXZSFH5TIuDg3K30kjO+sUbXm5NmmOUalljWoQr5cyETNulUnfxV9j461Q5ov\nPHVcjywmvAftBsgblRDtaMw45Oxfw3Uj3QlhY2x37tvCAxdacfPWqB7CkCzu0GB6\nDbAVPHCv4j+iSRoMnxtrfzLnzyc8Jl0QfnUVTfWBw1vtxggHybiwPHsmTkrgVNjR\nY01n04uihjQbhdVPWVfNt/w4B+e3GwrxMDOrlfx/38eaOuvnZCev8m6o5rBnC8Pw\n9xyOy4r2kbkQ8SHrQkcOSaL3fDwqfBCYNr1biKnWER0xuhxVVB+T+0jUCv+/h2h4\n3/CKmnlnhEFQ2vqkVF/EN7SouJpA1b34nHjZLkm2aqH5Cy9NqDPKqfN8ohKBkkgM\nX+9ttlKZqGUdDEuyGk2xAR39MTFBOb/bg44Vd0cnf8Ss1H3bVvE2DDw+S0gyEBe/\n3b3xzvK0kn6O1zWl1zB+H0Qs8CJF8QY8alXERaBmNv9ayuqdOOMhZ2AyURIkhY30\no0xch1iGPTE2SFidYhDHtMHTSpF95bB3J9TxP3ZwiB0EYn4cqdrVn7BQJLVjmyJu\n3HhmFLZQf/oHrt9cmhF9nSyi8gUazotXWvZMxbVuHkzPBGEhl4t+uGhxGbyNO/d4\nzaGOFhGMA4qyJDyju4Tk7r+Q+xtL8K2uD0/VazGgrxGyEM5JNc/9EF7l9guIySNI\nZl7vDysa68KIk+7T7SWC+WhK6WHTmBKS8nktE98oW4+GWWzyR4gsGF39a+sFX8NQ\nSFwW0JsGATtBhG2MmkX+rGbC9DL/3SEa6tiUSZncGHGkeYUQQX19eyrwHOO5xR1g\n3SZRmwjmiJiRdQzjOlq/3Gspgq8oDfF1lZqkDb2N+etGhaNOfVEZv+fzVkjf/d1z\nOF0=\n-----END ENCRYPTED PRIVATE KEY-----\n',
      passphrase: 'cb01c6d7d7a4673c2336de14948bedb2',
      accessToken: 'BrYkx6WQLCMO5tv32VZz4IYFXid33E33'
    },
    enterpriseID: '16885475'
  },
  azure: {
    cognitiveServicesKey1: 'f2554725f78f403fa734e95e7e381a85',
    cognitiveServicesKey2: '47c048f02ea54444a41e5983fff27511'
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || 'APP_ID',
    clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    username: '@TWITTER_USERNAME',
    clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
    clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
    callbackURL: '/api/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || 'APP_ID',
    clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || 'APP_ID',
    clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/linkedin/callback'
  },
  github: {
    clientID: process.env.GITHUB_ID || 'APP_ID',
    clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/github/callback'
  },
  paypal: {
    clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
    clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: true
  },
  mailer: {
    from: process.env.MAILER_FROM || 'MAILER_FROM',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  },
  livereload: true,
  seedDB: {
    seed: process.env.MONGO_SEED === 'true',
    options: {
      logResults: process.env.MONGO_SEED_LOG_RESULTS !== 'false',
      seedUser: {
        username: process.env.MONGO_SEED_USER_USERNAME || 'seeduser',
        provider: 'local',
        email: process.env.MONGO_SEED_USER_EMAIL || 'user@localhost.com',
        firstName: 'User',
        lastName: 'Local',
        displayName: 'User Local',
        roles: ['user']
      },
      seedAdmin: {
        username: process.env.MONGO_SEED_ADMIN_USERNAME || 'seedadmin',
        provider: 'local',
        email: process.env.MONGO_SEED_ADMIN_EMAIL || 'admin@localhost.com',
        firstName: 'Admin',
        lastName: 'Local',
        displayName: 'Admin Local',
        roles: ['user', 'admin']
      }
    }
  }
};
