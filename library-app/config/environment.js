/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
      firebase: {
// https://stackoverflow.com/questions/26403334/how-to-pass-api-keys-in-environment-variables-to-ember-cli-using-process-env
          messagingSenderId: null,
          apiKey: null,
          authDomain: "zoltantutorialember.firebaseapp.com",
          databaseURL: "https://zoltantutorialember.firebaseio.com",
          projectId: "zoltantutorialember",
          storageBucket: "zoltantutorialember.appspot.com"
      },

      // if using ember-cli-content-security-policy
      contentSecurityPolicy: {
          'script-src': "'self' 'unsafe-eval' apis.google.com",
          'frame-src': "'self' https://*.firebaseapp.com",
          'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
      },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
      // other option: load from .secret folder (however I prefer this method)
      ENV.firebase.apiKey=process.env.firebaseKey;
      ENV.firebase.messagingSenderId=process.env.firebaseID;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
