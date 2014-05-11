'use strict';

angular.module('valtechAngularIntroApp', [])
  .controller('listController', ['$scope', function($scope){

    var FORM_TYPES = ['Add', 'Update'];

    $scope.units = ['st', 'påse', 'dl'];

    $scope.list = [
      {
        qty: 1,
        unit: 'dl',
        product: 'Matlagningsgrädde',
        price: '15',
        purchased: true
      },
      {
        qty: 4,
        unit: 'st',
        product: 'Äpplen',
        price: '20',
        purchased: true
      },
      {
        qty: 1,
        unit: 'påse',
        product: 'bröd',
        price: '35',
        purchased: false
      },
      {
        qty: 5,
        unit: 'st',
        product: 'röda paprikor',
        price: '15',
        purchased: false
      },
      {
        qty: 1,
        unit: 'st',
        product: 'Magnum Mandel',
        price: '18',
        purchased: false
      }
    ];

    $scope.formItem = {
      formType: FORM_TYPES[0]
    };


    $scope.handleItem = function() {
      var item = $scope.formItem;
      if(item.formType === FORM_TYPES[0]) {
        item.purchased = false;
        $scope.list.push(item);
      }
    };
  }]);
