define('dekini-web/tests/test-helper', ['exports', 'dekini-web/tests/helpers/resolver', 'ember-qunit'], function (exports, _dekiniWebTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dekiniWebTestsHelpersResolver['default']);
});