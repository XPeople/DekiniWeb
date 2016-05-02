define('dekini-web/tests/helpers/resolver', ['exports', 'dekini-web/resolver', 'dekini-web/config/environment'], function (exports, _dekiniWebResolver, _dekiniWebConfigEnvironment) {

  var resolver = _dekiniWebResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dekiniWebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dekiniWebConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});