define('dekini-web/router', ['exports', 'ember', 'dekini-web/config/environment'], function (exports, _ember, _dekiniWebConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dekiniWebConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});