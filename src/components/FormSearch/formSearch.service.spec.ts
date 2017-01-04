import  * as angular from 'angular';
import 'angular-mocks';
import  FormSearchService  from './formSearch.service';
import { Search } from './formSearch.types';
import  Controller  from './formSearch.component';
import  { isEqual } from 'lodash';

describe('Testing service personService.',() => {
  let injector: any;
  let service: FormSearchService;
  let httpBackend: ng.IHttpBackendService;
  let controller: Controller;
  const module = angular.mock.module;

  beforeEach(module('mainApp'));
  
  describe('testing controller for formSearch.service', () => {

    beforeEach(() => {
      inject(($injector) => {
        injector = $injector;
        service = injector.get('formSearchService');
        httpBackend = injector.get('$httpBackend');
        const $componentController = injector.get('$componentController');
        controller = $componentController('formSearch');
      });
      
    });

    it('1) Should adding element in first position ', () => {
      const newSearchState: Search = {
        url: '',
        count: 0,
        places: [],
        place: '',
        totalPages: 0
      };

      jasmine.addCustomEqualityTester(angular.equals);
      service.pushSearch(newSearchState);
      expect(isEqual(service.historySearch[0], newSearchState)).toEqual(true);
    });

    it('2) Should move right on one position ', () => {
      const newSearchState: Search = {
        url: '',
        count: 0,
        places: [],
        place: '',
        totalPages: 0
      };

      jasmine.addCustomEqualityTester(angular.equals);
      service.historySearch[7] = newSearchState;
      service.pushSearch(newSearchState);
      expect(isEqual(service.historySearch[8], newSearchState)).toEqual(true);
    });

    it('3) Should return totla results', () => {
      const response: any = {
        'total_results': 45
      };

      expect(service.getTotalResults(response)).toBe(response['total_results']);
    })

    it('6) Should return data', () => {
      const url = 'http://api.nestoria.co.uk/api?' +
      'country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=london&callback=JSON_CALLBACK';
      const response: any = {
        request:{},
        response:{}
      };
      httpBackend.expectJSONP(url).respond(response);
      service.getData('london').then((res: any)=>{
        service.response = res.data.response;
      });
      httpBackend.flush();
      jasmine.addCustomEqualityTester(angular.equals);
      expect(isEqual(service.response, response.response)).toEqual(true);
    })
  })
})
