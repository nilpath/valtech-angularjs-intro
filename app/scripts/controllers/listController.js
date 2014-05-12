'use strict';

angular.module('valtechAngularIntroApp.controllers')
  .controller('listController', ['$scope', 'listItem', function($scope, ListItem){

    $scope.units = ['st', 'påse', 'dl'];
    $scope.list = ListItem.query();


  }]);
