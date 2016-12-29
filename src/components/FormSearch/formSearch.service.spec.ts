import  * as angular from 'angular';
import 'angular-mocks';
import  FormSearchService  from './formSearch.service';
import { Search } from './formSearch.types';

describe('Testing service personService.',() => {
  const module = angular.mock.module;
  let injector: any;
  let service: FormSearchService;
  let httpBackend: ng.IHttpBackendService;
  beforeEach(module('mainApp'));

  describe('testing controller for formSearch.service', () =>{ 
    beforeEach(()=>{
      inject(($injector)=>{
        injector=$injector;
        service=injector.get('formSearchService');
        httpBackend=injector.get('$httpBackend');
      });
      
    });

    it('1) Should adding element in first position ', () =>{
      const newSearchState: Search={
        url:'',
        count:0
      };

      jasmine.addCustomEqualityTester(angular.equals);
      service.pushSearch(newSearchState);
      expect(service.historySearch[0]).toEqual(newSearchState);
    });

    it('2) Should move right on one position ', () =>{
      const newSearchState: Search={
        url:'',
        count:0
      };

      jasmine.addCustomEqualityTester(angular.equals);
      service.historySearch[7]=newSearchState;
      service.pushSearch(newSearchState);
      expect(service.historySearch[8]).toEqual(newSearchState);
    });

    it('3) Should return totla results', () => {
      const response: any={
        'total_results':45
      };

      expect(service.getTotalResults(response)).toBe(response['total_results']);
    })

    it('4) Should return aray places', () => {
      const response: any={
        'total_results':45,
        'listings':[1,2,3]
      };

      expect(service.getArrayPlaces(response)).toEqual(response['listings']);
    })

    it('5) Should return current search', () => {
      const count=5;
      const search: Search={
        url: 'url',
        count: count
      };
      const response: any={
        'total_results': count
      }
      jasmine.addCustomEqualityTester(angular.equals);
      expect(service.getCurrentSearch('url', response)).toEqual(search);
    })
  })
})
