import 'angular-ui-router';
import  * as angular from 'angular';
import  Provider  from './routing.controller';
import PropertySearchContainer from '../../components/PropertySearchContainer/propertySearchContainer.module'
export default angular.module('routing', [
  'ui.router',
  PropertySearchContainer.name
  ]).config(Provider);
