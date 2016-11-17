import angular from 'angular';
import router from 'angular-ui-router';
import containerList from '../components/containerList/containerList.module.js'
export default angular.module('routerModule', 
[
   'ui.router',
   containerList.name
]);
require("./route.controller.js");
