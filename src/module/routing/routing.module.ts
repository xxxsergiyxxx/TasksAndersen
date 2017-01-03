import 'angular-ui-router';
import  * as angular from 'angular';
import  Provider  from './routing.controller';
import PropertySearchContainer from '../../components/PropertySearchContainer/propertySearchContainer.module';
import SearchListContainer from '../../components/SearchListContainer/searchListContainer.module';

export default angular.module('routing', [
  'ui.router',
  PropertySearchContainer.name,
  SearchListContainer.name
  ]).config( ($stateProvider, $urlRouterProvider) => new Provider($stateProvider, $urlRouterProvider) );
