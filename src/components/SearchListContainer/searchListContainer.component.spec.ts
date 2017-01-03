import * as angular from 'angular';
import 'angular-mocks';
import searchListContainer from './searchListContainer.component';

describe('Test module searchListContainer ', () => {
  const module = angular.mock.module;
  beforeEach(module('mainApp'));

  describe('Test ComponentPerson. ',() => {
    let controller: searchListContainer;
    let $componentController;
    beforeEach(() => {
      inject(($injector,_$componentController_) => {
        $componentController = _$componentController_;
      });
    });

    it ("check message", () => {
      const bindings = {
        formSearchService: {}
      }
      controller = $componentController('searchListContainer', null, bindings);
      expect( controller.formSearchService ).toEqual({});
    });
  })

});