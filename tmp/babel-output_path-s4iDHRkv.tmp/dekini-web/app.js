define('dekini-web/app', ['exports', 'ember', 'dekini-web/resolver', 'ember-load-initializers', 'dekini-web/config/environment'], function (exports, _ember, _dekiniWebResolver, _emberLoadInitializers, _dekiniWebConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dekiniWebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dekiniWebConfigEnvironment['default'].podModulePrefix,
    Resolver: _dekiniWebResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dekiniWebConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});