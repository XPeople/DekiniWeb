define('dekini-web/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dekini-web/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dekiniWebConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dekiniWebConfigEnvironment['default'].APP.name, _dekiniWebConfigEnvironment['default'].APP.version)
  };
});