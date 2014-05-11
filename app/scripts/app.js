'use strict';

angular.module('valtechAngularIntroApp', [])
  .controller('listController', ['$scope', function($scope){

    var FORM_TYPES = ['Add', 'Update'];

    $scope.units = ['st', 'påse', 'dl'];

    $scope.list = [
      {
        id: 0,
        qty: 1,
        unit: 'dl',
        product: 'Matlagningsgrädde',
        price: '15',
        purchased: true
      },
      {
        id: 1,
        qty: 4,
        unit: 'st',
        product: 'Äpplen',
        price: '20',
        purchased: true
      },
      {
        id: 2,
        qty: 1,
        unit: 'påse',
        product: 'bröd',
        price: '35',
        purchased: false
      },
      {
        id: 3,
        qty: 5,
        unit: 'st',
        product: 'röda paprikor',
        price: '15',
        purchased: false
      },
      {
        id: 4,
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

    function clearForm() {
      $scope.formItem = {
        formType: FORM_TYPES[0]
      };
    }

    $scope.handleItem = function() {
      var item = $scope.formItem;
      if(item.formType === FORM_TYPES[0]) {
        item.purchased = false;
        $scope.list.push(item);
        clearForm();
      }
      else if(item.formType === FORM_TYPES[1]) {
        angular.forEach($scope.list, function(itm){
          if(itm.id === item.id) {
            itm.qty = item.qty;
            itm.unit = item.unit;
            itm.product = item.product;
            itm.price = item.price;
            clearForm();
          }
        });
      }

    };

    $scope.editItem = function(item, $event) {
      $event.preventDefault();
      $scope.formItem = angular.copy(item);
      $scope.formItem.price = Number($scope.formItem.price);
      $scope.formItem.formType = FORM_TYPES[1];
    };

    $scope.deleteItem = function(item, $event) {
      $event.preventDefault();
      var index;
      angular.forEach($scope.list, function(itm, idx){
        if(itm.id === item.id) {
          index = idx;
        }
      });

      $scope.list.splice(index, 1);
    };

  }]);
