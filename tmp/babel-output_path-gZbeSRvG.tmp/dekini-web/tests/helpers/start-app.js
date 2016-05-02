define('dekini-web/tests/helpers/start-app', ['exports', 'ember', 'dekini-web/app', 'dekini-web/config/environment'], function (exports, _ember, _dekiniWebApp, _dekiniWebConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dekiniWebConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dekiniWebApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});