import 'angular-ui-router';
import  * as angular from 'angular';
import  Provider  from './routing.controller';
import PropertySearchContainer from '../../components/PropertySearchContainer/propertySearchContainer.module'
import SearchList from '../../components/SearchList/searchList.module'
export default angular.module('routing', [
  'ui.router',
  PropertySearchContainer.name,
  SearchList.name
  ]).config( ($stateProvider,$urlRouterProvider) => new Provider($stateProvider, $urlRouterProvider) );
