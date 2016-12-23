import * as angular from 'angular';
import 'angular-mocks';
import { Person } from  './person';
describe('ModuleFirstModule', ()=>{
  let controller: Person;
  let myService: any={
    getMessage:jasmine.createSpy("getMessage")
  };
  beforeEach(angular.mock.module('FirstModule'));

  describe('ComponentPerson',()=>{

    beforeEach(inject(( $componentController, $httpBackend ) => {
      controller = $componentController('lalLol', {
        personService: myService
      });
    }));

    it('check firstname', () => {
      expect ( controller.getName() ).toEqual( 'Olgerd' );
    });

    it('check lastname', () => {
      expect ( controller.getLastName() ).toEqual( 'Olgerdovich' );
    });

    it("called function", () => {
        controller.getMessage();
        expect(myService.getMessage).toHaveBeenCalled();
    });
  })
  /*describe('ServiceTest', ()=>{
    beforeEach(inject( (_userService_) ))
  });*/

});