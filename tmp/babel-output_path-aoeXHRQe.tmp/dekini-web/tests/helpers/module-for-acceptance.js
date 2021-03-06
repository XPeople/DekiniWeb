define('dekini-web/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dekini-web/tests/helpers/start-app', 'dekini-web/tests/helpers/destroy-app'], function (exports, _qunit, _dekiniWebTestsHelpersStartApp, _dekiniWebTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dekiniWebTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _dekiniWebTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});