'use strict';

angular.module('valtechAngularIntroApp.controllers', []);
angular.module('valtechAngularIntroApp.services', []);
angular.module('valtechAngularIntroApp.directives', ['valtechAngularIntroApp.services']);


angular.module('valtechAngularIntroApp', [
  'ngResource',
  'valtechAngularIntroApp.controllers',
  'valtechAngularIntroApp.directives',
  'valtechAngularIntroApp.services'
]);
