define('ember-ajax/utils/parse-response-headers', ['exports'], function (exports) {
  'use strict';

  exports['default'] = parseResponseHeaders;

  function parseResponseHeaders(headerStr) {
    var headers = Object.create(null);
    if (!headerStr) {
      return headers;
    }

    var headerPairs = headerStr.split('\r\n');
    for (var i = 0; i < headerPairs.length; i++) {
      var headerPair = headerPairs[i];
      // Can't use split() here because it does the wrong thing
      // if the header value has the string ": " in it.
      var index = headerPair.indexOf(': ');
      if (index > 0) {
        var key = headerPair.substring(0, index);
        var val = headerPair.substring(index + 2);
        headers[key] = val;
      }
    }

    return headers;
  }
});