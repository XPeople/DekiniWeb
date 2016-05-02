/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });


  app.import('vendor/css/bootstrap.css');
  app.import('vendor/css/jpreloader.css');
  app.import('vendor/css/animate.css');
  app.import('vendor/css/flexslider.css');
  app.import('vendor/css/plugin.css');
  app.import('vendor/css/prettyPhoto.css');
  app.import('vendor/css/owl.carousel.css');
  app.import('vendor/css/owl.theme.css');
  app.import('vendor/css/owl.transitions.css');
  app.import('vendor/css/custom-style.css');
  app.import('vendor/css/color.css');

  app.import('vendor/css/rev-settings.css');
  app.import('vendor/rs-plugin/css/settings.css');


  app.import('vendor/js/jquery.min.js');
  app.import('vendor/js/jpreLoader.js');
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/jquery.isotope.min.js');
  app.import('vendor/js/jquery.prettyPhoto.js');
  app.import('vendor/js/easing.js');
  app.import('vendor/js/jquery.ui.totop.js');
  app.import('vendor/js/jquery.flexslider-min.js');
  app.import('vendor/js/jquery.scrollto.js');
  app.import('vendor/js/owl.carousel.js');
  app.import('vendor/js/jquery.countTo.js');
  app.import('vendor/js/classie.js');
  app.import('vendor/js/video.resize.js');
  app.import('vendor/js/validation.js');
  app.import('vendor/js/jquery.stellar.min.js');
  app.import('vendor/js/designesia.js');

  app.import('vendor/rs-plugin/js/jquery.themepunch.plugins.min.js');
  app.import('vendor/rs-plugin/js/jquery.themepunch.revolution.min.js');
 

  return app.toTree();
};
