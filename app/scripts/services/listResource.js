'use strict';

angular.module('valtechAngularIntroApp.services')
  .service('listItem', ['$resource', function($resource){
    return $resource('http://127.0.0.1:9001/items/:id', {}, {
      update: {
        method: 'PUT'
      }
    });
  }]);
