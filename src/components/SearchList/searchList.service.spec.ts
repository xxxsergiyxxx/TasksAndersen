import  * as angular from 'angular';
import 'angular-mocks';
import SearchListService from './searchList.service';

describe('Test searchList.service', () => {
  const module = angular.mock.module;

  let service: SearchListService;
  beforeEach(module('mainApp'));

  describe('Testing returning data', () => {
    beforeEach(() => {
      inject(($injector) => {
        service = $injector.get('searchListService');
      })
    })

    it('1) Should return count pages', () => {
      const totalPages: number = 15;
      service.viewPages=20;
      service.getViewPages(totalPages);
      expect(service.viewPages).toBe(15);
      expect(service.remainingPages).toBe(0);
    })
  })
})