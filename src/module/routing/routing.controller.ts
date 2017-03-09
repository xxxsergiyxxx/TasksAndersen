import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import formSearchService from '../../components/FormSearch/formSearch.service';
import searchList from '../../components/SearchList/searchList.service';

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
         template: '<search-list-container form-search-service="$resolve.formSearchService" ></search-list-container',
         resolve: {
           formSearchService: ['formSearchService', this.getService]
         }
       },
       {
         name: 'detail',
         url: '/search/detail',
         template: '<detail detail="$resolve.detail"></detail>',
         resolve: {
           detail: ['searchListService', this.getDetail]
         }
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

  public getPlace(service: formSearchService) {
    return service.place;
  }

  public getTotalPages(service: formSearchService) {
    return service.totalPages;
  }

  public getService(service: formSearchService) {
    return service;
  }

  public getDetail(service: searchList) {
    return service.getCurrent();
  }
}
export default Provider;