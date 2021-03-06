"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('dekini-web/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dekini-web/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dekiniWebConfigEnvironment) {

  var name = _dekiniWebConfigEnvironment['default'].APP.name;
  var version = _dekiniWebConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dekini-web/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dekini-web/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dekini-web/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dekini-web/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dekiniWebConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dekiniWebConfigEnvironment['default'].APP.name, _dekiniWebConfigEnvironment['default'].APP.version)
  };
});
define('dekini-web/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dekini-web/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dekini-web/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dekini-web/initializers/export-application-global', ['exports', 'ember', 'dekini-web/config/environment'], function (exports, _ember, _dekiniWebConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dekiniWebConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dekiniWebConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dekiniWebConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dekini-web/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dekini-web/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dekini-web/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dekini-web/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dekini-web/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dekini-web/router', ['exports', 'ember', 'dekini-web/config/environment'], function (exports, _ember, _dekiniWebConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dekiniWebConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('dekini-web/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("dekini-web/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dekini-web/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dekini-web/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 519,
            "column": 10
          }
        },
        "moduleName": "dekini-web/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" This section is for Splash Screen ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "jSplash");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "selected");
        var el3 = dom.createTextNode("\n            This is custom text rotator on loading screen!\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createTextNode("\n            Insert your custom message here.\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        var el3 = dom.createTextNode("\n            Make your customers smile.\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" End of Splash Screen ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "wrapper");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "page-overlay");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" header begin ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-md-12");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" logo begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.setAttribute(el6, "id", "logo");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "index.html");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-1");
        dom.setAttribute(el8, "src", "assets/images/logo.png");
        dom.setAttribute(el8, "alt", "");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-2");
        dom.setAttribute(el8, "src", "assets/images/logo-2.png");
        dom.setAttribute(el8, "alt", "");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" logo close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" small button begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "id", "menu-btn");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" small button close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" mainmenu begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("nav");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "id", "mainmenu");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "class", "active");
        dom.setAttribute(el9, "href", "#wrapper");
        var el10 = dom.createTextNode("Home");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#section-about");
        var el10 = dom.createTextNode("About Us");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#section-services");
        var el10 = dom.createTextNode("Services");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#section-testimonial");
        var el10 = dom.createTextNode("Testimonial");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#section-contact");
        var el10 = dom.createTextNode("Contact");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" mainmenu close ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" header close ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" content begin ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "content");
        dom.setAttribute(el2, "class", "no-bottom no-top");
        var el3 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "section-welcome");
        dom.setAttribute(el3, "class", "full-height dark");
        dom.setAttribute(el3, "data-stellar-background-ratio", ".2");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "center-y text-center");
        var el5 = dom.createTextNode("\n                    CREATIVE AGENCY / WEBSITE DEVELOPMENT / COPYWRITER\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "spacer-single");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "text-slider border-deco");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "text-item");
        var el7 = dom.createTextNode("Welcome To ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "id-color");
        var el8 = dom.createTextNode("Cubic");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "text-item");
        var el7 = dom.createTextNode("Desktop + ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "id-color");
        var el8 = dom.createTextNode("Mobile");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "text-item");
        var el7 = dom.createTextNode("Clean & ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "id-color");
        var el8 = dom.createTextNode("Fresh");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "text-item");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "id-color");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-bike");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Ready to Go?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "spacer-single");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#section-portfolio");
        dom.setAttribute(el5, "class", "btn btn-border btn-big");
        var el6 = dom.createTextNode("View Our Works");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "section-about");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6 col-md-offset-3 text-center");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h1");
        dom.setAttribute(el8, "class", "animated");
        dom.setAttribute(el8, "data-animation", "fadeInUp");
        var el9 = dom.createTextNode("Who We ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9, "class", "id-color");
        var el10 = dom.createTextNode("Are?");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9, "class", "small-border animated");
        dom.setAttribute(el9, "data-animation", "fadeInUp");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "intro");
        var el6 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        var el8 = dom.createTextNode("Our Vision");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        var el8 = dom.createTextNode("Our Mission");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "fun-facts");
        dom.setAttribute(el3, "class", "dark");
        dom.setAttribute(el3, "data-stellar-background-ratio", ".2");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 text-center");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h1");
        dom.setAttribute(el7, "class", "animated");
        dom.setAttribute(el7, "data-animation", "fadeInUp");
        var el8 = dom.createTextNode("Fun ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "id-color");
        var el9 = dom.createTextNode("Facts");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "small-border animated");
        dom.setAttribute(el7, "data-animation", "fadeInUp");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "spacer-single");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-3 animated");
        dom.setAttribute(el6, "data-animation", "fadeInLeft");
        dom.setAttribute(el6, "data-delay", "100");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_count");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-alarmclock animated");
        dom.setAttribute(el8, "data-animation", "fadeInDown");
        dom.setAttribute(el8, "data-delay", "0");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        dom.setAttribute(el8, "class", "timer");
        dom.setAttribute(el8, "data-to", "1980");
        dom.setAttribute(el8, "data-speed", "2500");
        var el9 = dom.createTextNode("0");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createTextNode("Hours of Works");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-3 animated");
        dom.setAttribute(el6, "data-animation", "fadeInLeft");
        dom.setAttribute(el6, "data-delay", "0");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_count");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-documents animated");
        dom.setAttribute(el8, "data-animation", "fadeInDown");
        dom.setAttribute(el8, "data-delay", "200");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        dom.setAttribute(el8, "class", "timer");
        dom.setAttribute(el8, "data-to", "1280");
        dom.setAttribute(el8, "data-speed", "2500");
        var el9 = dom.createTextNode("0");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createTextNode("Lines of Code");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-3 animated");
        dom.setAttribute(el6, "data-animation", "fadeInRight");
        dom.setAttribute(el6, "data-delay", "0");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_count");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-piechart animated");
        dom.setAttribute(el8, "data-animation", "fadeInDown");
        dom.setAttribute(el8, "data-delay", "400");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        dom.setAttribute(el8, "class", "timer");
        dom.setAttribute(el8, "data-to", "750");
        dom.setAttribute(el8, "data-speed", "2500");
        var el9 = dom.createTextNode("0");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createTextNode("Slice of Pizza");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-3 animated");
        dom.setAttribute(el6, "data-animation", "fadeInRight");
        dom.setAttribute(el6, "data-delay", "100");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_count");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-wine animated");
        dom.setAttribute(el8, "data-animation", "fadeInDown");
        dom.setAttribute(el8, "data-delay", "600");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        dom.setAttribute(el8, "class", "timer");
        dom.setAttribute(el8, "data-to", "520");
        dom.setAttribute(el8, "data-speed", "2500");
        var el9 = dom.createTextNode("0");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createTextNode("Cups of Coffee");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "section-services");
        dom.setAttribute(el3, "class", "no-bottom");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6 col-md-offset-3 text-center");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h1");
        dom.setAttribute(el7, "class", "animated");
        dom.setAttribute(el7, "data-animation", "fadeInUp");
        var el8 = dom.createTextNode("Our ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "id-color");
        var el9 = dom.createTextNode("Services");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "small-border animated");
        dom.setAttribute(el8, "data-animation", "fadeInUp");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            \n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "spacer-single");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "feature-box-small-icon col-md-4 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "0");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "inner");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-tools");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "text");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h3");
        var el10 = dom.createTextNode("Web Design");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "feature-box-small-icon col-md-4 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "200");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "inner");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-global");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "text");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h3");
        var el10 = dom.createTextNode("Branding");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "feature-box-small-icon col-md-4 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "400");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "inner");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-megaphone");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "text");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h3");
        var el10 = dom.createTextNode("Campaign");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "feature-box-small-icon col-md-4 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "600");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "inner");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-phone");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "text");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h3");
        var el10 = dom.createTextNode("Mobile Apps");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "feature-box-small-icon col-md-4 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "800");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "inner");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-magnifying-glass");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "text");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h3");
        var el10 = dom.createTextNode("SEO Services");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box begin ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "feature-box-small-icon col-md-4 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "1000");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "inner");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8, "class", "icon-pencil");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "text");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h3");
        var el10 = dom.createTextNode("Copywriter");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" feature box close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "spacer-single");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 text-center animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "400");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "assets/images/cubic_ss.png");
        dom.setAttribute(el7, "class", "img-responsive");
        dom.setAttribute(el7, "alt", "");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "view-all-projects");
        dom.setAttribute(el3, "class", "call-to-action bg-color dark text-center");
        dom.setAttribute(el3, "data-stellar-background-ratio", ".2");
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" logo carousel section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "section-testimonial");
        dom.setAttribute(el3, "class", "dark");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 text-center");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h1");
        dom.setAttribute(el7, "class", "animated");
        dom.setAttribute(el7, "data-animation", "fadeInUp");
        var el8 = dom.createTextNode("Customer ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "id-color");
        var el9 = dom.createTextNode("Says");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "small-border animated");
        dom.setAttribute(el7, "data-animation", "fadeInUp");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "spacer-single");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "testimonial-carousel");
        dom.setAttribute(el5, "class", "de_carousel row animated");
        dom.setAttribute(el5, "data-animation", "fadeInUp");
        dom.setAttribute(el5, "data-delay", "200");
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4 item");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_testi");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("blockquote");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("The support staff is AMAZING. Same day service. They also have built a GREAT theme that supports so many functions. You can tweak little things here and there and use its functionality for SO much more! What an AWESOME AWESOME AWESOME theme.");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "de_testi_by");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_pic");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/testi_pic%20(1).jpg");
        dom.setAttribute(el10, "alt", "");
        dom.setAttribute(el10, "class", "img-circle");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_company");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("strong");
        var el11 = dom.createTextNode("Feldhouse");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode(", Customer\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4 item");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_testi");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("blockquote");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("All of my questions were answered, designesia was very forthcoming and helpful and even sent me custom code for a specific problem I had. I know one thing: whatever theme designesia publishes, you can be assured that you get the best quality and support out there.");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "de_testi_by");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9, "class", "de_testi_pic");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/testi_pic%20(2).jpg");
        dom.setAttribute(el10, "alt", "");
        dom.setAttribute(el10, "class", "img-circle");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_company");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("strong");
        var el11 = dom.createTextNode("Mores");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode(", Customer\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4 item");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_testi");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("blockquote");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("There are some themes I have bought and are just 'eh' about. This one hands down does so much more than you could think. Perfect theme - and thanks for continually updating and improving it!");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "de_testi_by");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_pic");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/testi-default.jpg");
        dom.setAttribute(el10, "alt", "");
        dom.setAttribute(el10, "class", "img-circle");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_company");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("strong");
        var el11 = dom.createTextNode("Feldhouse");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode(", Customer\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4 item");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_testi");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("blockquote");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("Again, great template and I love that it works on the computer, iPad, phone, etc. Very clean design, keep up the great work!");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "de_testi_by");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_pic");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/testi_pic%20(1).jpg");
        dom.setAttribute(el10, "alt", "");
        dom.setAttribute(el10, "class", "img-circle");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_company");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("strong");
        var el11 = dom.createTextNode("Barbara");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode(", Customer\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4 item");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_testi");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("blockquote");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("Everything is nicely accessible inside the theme customization screen. It is easily comprehensible, the way things work is very natural and intuitive.");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "de_testi_by");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9, "class", "de_testi_pic");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/testi_pic%20(2).jpg");
        dom.setAttribute(el10, "alt", "");
        dom.setAttribute(el10, "class", "img-circle");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_company");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("strong");
        var el11 = dom.createTextNode("Mores");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode(", Customer\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4 item");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "de_testi");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("blockquote");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("Fit our needs like a glove. 1 hour to setup. I am currently implementing the language support Thanks for the awesome.");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "de_testi_by");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_pic");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/testi-default.jpg");
        dom.setAttribute(el10, "alt", "");
        dom.setAttribute(el10, "class", "img-circle");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "de_testi_company");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("strong");
        var el11 = dom.createTextNode("Itweb");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode(", Customer\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "logo-full");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" logo carousel ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "logo-carousel");
        var el7 = dom.createTextNode("\n                                    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "id", "logo-carousel");
        dom.setAttribute(el7, "class", "slides");
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/1.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/2.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/3.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/4.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/5.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/6.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/7.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("\n                                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-2");
        var el10 = dom.createTextNode("\n                                                ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("img");
        dom.setAttribute(el10, "src", "assets/images/logo/8.png");
        dom.setAttribute(el10, "alt", "");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" logo carousel close ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "id", "section-contact");
        dom.setAttribute(el3, "class", "dark");
        dom.setAttribute(el3, "data-stellar-background-ratio", ".2");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 text-center");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h1");
        dom.setAttribute(el7, "class", "animated");
        dom.setAttribute(el7, "data-animation", "fadeInUp");
        var el8 = dom.createTextNode("Contact ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "id-color");
        var el9 = dom.createTextNode("Us");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        	");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "small-border animated");
        dom.setAttribute(el8, "data-animation", "fadeInUp");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "animated");
        dom.setAttribute(el7, "data-animation", "fadeIn");
        var el8 = dom.createTextNode("\n                                Get in touch with us. Feel Free to use contact below.\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "spacer-single");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-8 animated");
        dom.setAttribute(el6, "data-animation", "fadeInUp");
        dom.setAttribute(el6, "data-delay", "200");
        dom.setAttribute(el6, "data-speed", "5");
        var el7 = dom.createTextNode("\n\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("form");
        dom.setAttribute(el7, "name", "contactForm");
        dom.setAttribute(el7, "id", "contact_form");
        dom.setAttribute(el7, "method", "post");
        dom.setAttribute(el7, "action", "email.php");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "row");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-6");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10, "id", "name_error");
        dom.setAttribute(el10, "class", "error");
        var el11 = dom.createTextNode("Please enter your name.");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        var el11 = dom.createTextNode("\n                                            ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("input");
        dom.setAttribute(el11, "type", "text");
        dom.setAttribute(el11, "name", "name");
        dom.setAttribute(el11, "id", "name");
        dom.setAttribute(el11, "class", "form-control");
        dom.setAttribute(el11, "placeholder", "Your Name");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                                        ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-6");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10, "id", "email_error");
        dom.setAttribute(el10, "class", "error");
        var el11 = dom.createTextNode("Please enter your valid E-mail ID.");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        var el11 = dom.createTextNode("\n                                            ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("input");
        dom.setAttribute(el11, "type", "text");
        dom.setAttribute(el11, "name", "email");
        dom.setAttribute(el11, "id", "email");
        dom.setAttribute(el11, "class", "form-control");
        dom.setAttribute(el11, "placeholder", "Your Email");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                                        ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-12");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10, "id", "message_error");
        dom.setAttribute(el10, "class", "error");
        var el11 = dom.createTextNode("Please enter your message.");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        var el11 = dom.createTextNode("\n                                            ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("textarea");
        dom.setAttribute(el11, "name", "message");
        dom.setAttribute(el11, "id", "message");
        dom.setAttribute(el11, "class", "form-control");
        dom.setAttribute(el11, "placeholder", "Your Message");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                                        ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "id", "mail_success");
        dom.setAttribute(el9, "class", "success");
        var el10 = dom.createTextNode("Your message has been sent successfully.");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "id", "mail_fail");
        dom.setAttribute(el9, "class", "error");
        var el10 = dom.createTextNode("Sorry, error occured this time sending your message.");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "col-md-12");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10, "id", "submit");
        var el11 = dom.createTextNode("\n                                            ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("input");
        dom.setAttribute(el11, "type", "submit");
        dom.setAttribute(el11, "id", "send_message");
        dom.setAttribute(el11, "value", "Submit Form");
        dom.setAttribute(el11, "class", "btn btn-border");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                                        ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("address");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-map-marker fa-lg");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("100 Mainstreet Center, Sydney");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-phone fa-lg");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("(208) 333 9296");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-envelope-o fa-lg");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "mailto:contact@example.com");
        var el10 = dom.createTextNode("contact@example.com");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-globe fa-lg");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#");
        var el10 = dom.createTextNode("support.cubic.com");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" section close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" footer begin ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("footer");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 text-center");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "social-icons");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-facebook fa-lg");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-twitter fa-lg");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-rss fa-lg");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-google-plus fa-lg");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-skype fa-lg");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-dribbble fa-lg");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "spacer-single");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                            © Copyright 2014 - Cubic by Designesia\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" footer close ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dekini-web/config/environment', ['ember'], function(Ember) {
  var prefix = 'dekini-web';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dekini-web/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"dekini-web","version":"0.0.0+023a637d"});
}

/* jshint ignore:end */
//# sourceMappingURL=dekini-web.map