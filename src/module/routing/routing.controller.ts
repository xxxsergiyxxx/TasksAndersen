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
         template: '<search-list places="$resolve.places" place={{$resolve.place}} total-pages={{$resolve.totalPages}}></search-list>',
         resolve: {
           places: ['formSearchService', this.getResult],
           place: ['formSearchService', this.getPlace],
           totalPages: ['formSearchService', this.getTotalPages]
         }
       },
       {
         name: 'search.detail',
         url: '/{page}'
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

  public getPlace(service: formSearchService){
    // for(let state in service)
    // console.log('service '+state);
    return service.place;
  }

  public getTotalPages(service: formSearchService){
    return service.totalPages;
  }
}
export default Provider;