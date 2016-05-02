define('dekini-web/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dekini-web/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dekiniWebConfigEnvironment) {

  var name = _dekiniWebConfigEnvironment['default'].APP.name;
  var version = _dekiniWebConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});