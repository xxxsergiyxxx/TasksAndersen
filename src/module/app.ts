import * as angular from 'angular';
import PersonModule  from '../components/person/person.module';
import 'angular-ui-router';
import Provider from './routing/router.controller'
export class MyClass {
}
angular.module('mainApp', [
  'ui.router',
  PersonModule.name
  ]).config(Provider);