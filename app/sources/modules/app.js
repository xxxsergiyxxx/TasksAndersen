import angular from 'angular';
import ngAnimate from 'angular-animate';
import routerModule from '../routing/route.module.js'
angular.module("mainApp", 
[
   'ngAnimate',
   routerModule.name
]);