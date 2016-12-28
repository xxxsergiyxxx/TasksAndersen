import 'angular-ui-router';
import  * as angular from 'angular';
import  Provider  from './routing.controller';

export default angular.module('routing', [
  'ui.router'
  ]).config(Provider);
