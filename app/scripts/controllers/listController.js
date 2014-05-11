'use strict';

angular.module('valtechAngularIntroApp.controllers')
  .controller('listController', ['$scope', 'listItem', function($scope, ListItem){

    var FORM_TYPES = ['Add', 'Update'];

    $scope.units = ['st', 'påse', 'dl'];

    $scope.list = ListItem.query();

    $scope.formItem = new ListItem();
    $scope.formItem.formType = FORM_TYPES[0];

    function clearForm() {
      $scope.formItem = new ListItem();
      $scope.formItem.formType = FORM_TYPES[0];
    }

    $scope.handleItem = function() {

      function onCreateSuccess(item) {
        $scope.list.push(item);
        clearForm();
      }

      function onUpdateSuccess(item) {
        console.log(item);
        clearForm();
      }

      function onError(error) {
        console.log(error);
      }

      var formItem = $scope.formItem;

      if(formItem.formType === FORM_TYPES[0]) {
        formItem.purchased = false;
        formItem.$save({}, onCreateSuccess, onError);

      }
      else if(formItem.formType === FORM_TYPES[1]) {

        formItem.$update({id: formItem.id}, onUpdateSuccess, onError);
      }

    };

    $scope.editItem = function(item, $event) {
      $event.preventDefault();
      $scope.formItem = item;
      $scope.formItem.formType = FORM_TYPES[1];
    };

    $scope.deleteItem = function(item, $event) {
      $event.preventDefault();

      function onDeleteSuccess(itm) {
        var index;
        angular.forEach($scope.list, function(item, idx){
          if(itm.id === item.id) {
            index = idx;
          }
        });

        $scope.list.splice(index, 1);
      }

      function onError(error) {
        console.log(error);
      }


      item.$delete({id: item.id}, onDeleteSuccess, onError);

    };

  }]);
