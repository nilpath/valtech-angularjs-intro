'use strict';

angular.module('valtechAngularIntroApp.directives')
  .directive('vaiaList', ['listItem', function(ListItem){
    return {
      restrict: 'A',
      transclude: true,
      replace: true,
      scope: {
        items: '=vaiaItems',
        units: '=vaiaUnits'
      },
      templateUrl: 'views/directives/vaiaList.html',
      controller: function($scope) {

        var FORM_TYPES = ['Add', 'Update'];

        $scope.formItem = new ListItem();
        $scope.formItem.formType = FORM_TYPES[0];

        this.editItem = function(item, $event) {
          $event.preventDefault();
          $scope.formItem = item;
          $scope.formItem.formType = FORM_TYPES[1];
        };

        this.checkItem = function(item) {
          console.log('hej');
          item.$update({id: item.id});
        };

        this.deleteItem = function(item, $event) {
          $event.preventDefault();
          function onDeleteSuccess(itm) {
            var index;
            angular.forEach($scope.items, function(item, idx){
              if(itm.id === item.id) {
                index = idx;
              }
            });
            console.log($scope);
            $scope.items.splice(index, 1);
          }

          function onError(error) {
            console.log(error);
          }


          item.$delete({id: item.id}, onDeleteSuccess, onError);

        };





        $scope.handleItem = function() {

          function clearForm() {
            $scope.formItem = new ListItem();
            $scope.formItem.formType = FORM_TYPES[0];
          }

          function onCreateSuccess(item) {
            $scope.items.push(item);
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

      }
    };
  }]);

angular.module('valtechAngularIntroApp.directives')
  .directive('vaiaListItem', [function(){

    return {
      restrict: 'AE',
      require: '^vaiaList',
      replace: true,
      templateUrl: 'views/directives/vaiaListItem.html',
      scope: {
        item: '=item',
        formItem: '=formItem'
      },
      link: function(scope, element, attrs, ctrl) {

        scope.deleteItem = ctrl.deleteItem;
        scope.editItem = ctrl.editItem;
        scope.checkItem = ctrl.checkItem;

      }
    };

  }]);
