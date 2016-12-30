import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import formSearchService from '../../components/FormSearch/formSearch.service';

const propertySearchContainer = require('../../components/PropertySearchContainer/propertySearchContainer.template.html');
const searchList = require('../../components/SearchList/searchList.template.html');

class Provider {
  
  private static $inject: string[] = ['$stateProvider', '$urlRouterProvider'];

  constructor(stateProvider: uiRouter.IStateProvider, urlRouterProvider: uiRouter.IUrlRouterProvider) {
    const states =
    [
       {
          name: '/',
          url: '/',
          template: '<property-search-container></property-search-container>'
       },
       {
         name: 'search',
         url: '/search',
         template: '<search-list func="{{$resolve.func}}"></search-list>',
         resolve: {
           func: ['formSearchService', this.getResult]
         }
       },
       {
         name: 'search.detail',
         url: '/{place}'
       }
    ]

    states.forEach(state => {
      stateProvider.state(state);
    });
    urlRouterProvider.otherwise('/');
  }

  public getResult(service: formSearchService) {
    return service.getArrayPlaces();
  }
}
export default Provider;