import * as angular from 'angular';
import 'angular-mocks';
import searchList from './searchList.component';
describe('Test module FirstModule. ', ()=>{
  const module=angular.mock.module;
  beforeEach(module('mainApp'));

  describe('Test ComponentPerson. ',()=>{
    let controller: searchList;
    let $componentController;
    beforeEach(()=>{
      inject(($injector,_$componentController_)=> {
        $componentController = _$componentController_;
      });
    });

    it ("check message", () =>{
      const bindings={
        place:'london',
        places: []
      }
      controller=$componentController('searchList', null, bindings);
      expect( controller.place ).toEqual('london');
      expect( controller.places ).toEqual([]);
    });
  })

});