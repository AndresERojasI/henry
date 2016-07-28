'use strict';
angular.module('main')
.controller('AppCtrl', function ($cordovaInAppBrowser) {
  var options = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'no'
  };

  document.addEventListener('deviceready', function () {
    $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
      .then(function (event) {
        // success
        console.log(event);
      })
      .catch(function (event) {
        // error
        console.log(event);
      });

  }, false);
});
