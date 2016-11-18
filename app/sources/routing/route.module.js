import angular from 'angular';
import router from 'angular-ui-router';
import containerList from '../components/containerList/containerList.module.js';
import Provider from './route.controller.js';
export default angular.module('routerModule', 
[
   'ui.router',
   containerList.name
]).config(Provider);
