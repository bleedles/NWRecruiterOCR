'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/nwrecruiter-dev',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  keywords: ['java', 'c#', 'javascript', 'sql', 'angular', '.net', 'mongo', 'azure', 'aws', 'python', 'sharepoint'],
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
      privateKeyPath: './config/keys/private_key.pem',
      passphrase: 'cb01c6d7d7a4673c2336de14948bedb2',
      accessToken: process.env.ACCESS_TOKEN || 'VBZyWhQE3ig2H34FsbwQ3A5wU25AXnUf'
    },
    enterpriseID: '16885475'
  },
  nationwideBoxAppSettings: {
    clientID: "imtrk9b4o44t46395lxo6nk24gcmyevo",
    clientSecret: "Zxr7oGNnD2ymSbcCqVVnAmHcutTjdc7E",
    appAuth: {
      publicKeyID: "vpaomna3",
      privateKey: "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIsWD/8mDn8HICAggA\nMBQGCCqGSIb3DQMHBAhaqAUXaAPYNgSCBMir/IRGQcjQTde9WxteA1HkEwI/haVu\n5xTl8Ow+aJI0+90hQaKIDMmwSK7qsjt6arZKKerM5nDeCC/UwFohRgvfDRiq325z\nF7DaYM49tPWXZCcdhkclfAibhXxpm7Pviod78oSpJAGhd9PNfzxdeMQebGABlYfc\nvdQxxXjeDti3uT3eiRsFkSwcQGvTapbLit+K42hubjJtLp3poihQh3oGCYSfDzRJ\n399wYCmq9TQG6AIrooq13MI3geZ4RP+OJruKTdCWqgYiPnYWirJj8t83XQLJeF4C\nKnltPfsJ715pR5VJsbmfLYTqBp5ZvGrbRZB0iGymkY8rGq7IYad38j4hBHxgIBQ5\nYMyJAxnvLFhAbXjTHuHxVgGA+DkPrKMbhEf+X7RqOUAYRoiR7Xv132gouPFUyPpE\n/gebbpFfosbfY5V+jeq+3q8jTSaxBdhZn1LdCNYGozt2px/zVqain0Wh9nz0NOS1\n615uMWx8+rH5UL+OuD4b0tXkvCxH0dccOsCMQglGRcjIaYwG1sY/9PYMAB20ITNG\nIoO75ecFPy97NtlAMSbq2pZ3TH49tI1tbmK67M7BIbR6YhegyPnZixICachlWP13\nucOE9xAZL2YC2LEtTIrGXN6yAvCilSoc1SjCDkkJkre0VIKJFJgpVG/dOIg6+Q4j\nVlla1lmMnjv3gnIhGUud+OuFnck2TaEnDVrgYyzMRM9f5P+V2DRHgIuWX5UxOCYl\nnkmwtrFgiiOaJvds/bx0otupHjYsJ9pjV/Mb5JC/nCX6akl13BoQA84wELXSIACe\n9UD/7YSdBMMcdJz/zRprjIxCtqFv+3HNwaSG5k4DP+nKnUB2rsVusOEHz5/se8rH\n+jiFTefH74ZE00HDIy5Q8oJF2P0/1MRWBJv1hnkalFikBz1gwkN5vrUwPNc2fbIi\nvzrdRJzqpqNC60rUBMOtCRaG5jdLEy0P00xNzhCybItXRjPYsD9SFwMSJaMbwbsf\ngZxspsTm9I74R2X6zrJDzub7/hS4QQjVvuu8kTxvqApM7mYrAX/WLTx7mjAqqPpE\n75xLuf1/5cIxcOU64Fj7E/v4AWRl1iy2FYZfrnhRF4iBqS4pTE8GDFRqy82Ut1nQ\nhUewpGaXy8j8sn63ACzpfJCzwaE/3z166ZuAMlLAmqj4Ay7S26uQvJJMlvDqFWzk\n337VmExXjzt+JwE5CTYGgRyoOs+sw8z6nsgTbphTE3dhHRt2rvw/SLqgkc0VZ7V4\nJZQ6Iics5p8/qZPn9LDxqpYcm9BL4mmzPbLUGHW6dQbOaHXDzxJbJt5BADOPgCbu\nIsHYScS78L5pBWaZstzUJ0N+aS2VS3uR2vEUheyKj+kWu/Sq8AHl5EuunBderqvg\nylhoBxsvm3yxHVReKZzKtn3D8t5xLr1LgfTIEgMSQ2rbDlswg/y8xVREsi+s4AnW\nD/PSm3ME1qLcZfrHqR7bG8ejQWR/8H81xYd5FThpo0XZOWlnLZ+rnZ6Ra8X00TLQ\nqnYp+EmofFVbm1GXLcqEB5WVWcBMUY0DdeMXRFP3kt5JSskltI+NZ5jMPIij7DbU\n/xLt2fo9uBD5h209cJlxM369oeGO1LcnkGxj0x2w1KJYvUYcImfVo7YH0YqKU+Vf\nzME=\n-----END ENCRYPTED PRIVATE KEY-----\n",
      passphrase: "f5e993e68f75acef237554192fb46e46"
    },
    enterpriseID: "59407"
  },
  azure: {
    host: 'westcentralus.api.cognitive.microsoft.com',
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
