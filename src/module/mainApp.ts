import * as angular from 'angular';
import Routing from './routing/routing.module';
import '../css/style.css';
import 'angular-material';

angular.module('mainApp', [
  Routing.name,
  'ngMaterial'
  ]).config(function($mdIconProvider) {
  $mdIconProvider.fontSet('md', 'material-icons');
});