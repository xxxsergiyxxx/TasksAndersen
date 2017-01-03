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
      service.remainingPages = 35;
      service.viewPages=20;
      service.getViewNextPages();
      expect(service.viewPages).toBe(20);
      expect(service.remainingPages).toBe(15);
      service.getViewNextPages();
      expect(service.viewPages).toBe(15);
      expect(service.remainingPages).toBe(0);
    })

    it('2) Should fill array page numer', () => {
      service.remainingPages = 35;
      service.viewPages=20;
      service.getViewNextPages();
      service.fillArray();
      expect(service.numberPages[0]).toBe(1);
      service.getViewNextPages();
      service.fillArray();
      expect(service.numberPages[0]).toBe(21);
    })

    it('3) Should change countNext', () => {
      service.remainingPages = 35;
      service.viewPages=20;
      service.getViewNextPages();
      expect(service.countNext).toBe(0);
      service.getViewNextPages();
      expect(service.countNext).toBe(20);
    })
  })
})