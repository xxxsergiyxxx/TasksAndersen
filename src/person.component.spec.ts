import * as angular from 'angular';
import 'angular-mocks';
import { Person } from  './person.component';
describe('ModuleFirstModule', ()=>{
  const module=angular.mock.module;
  beforeEach(module('FirstModule'));
  describe('ComponentPerson',()=>{
    let controller: Person;
    let compile;
    let getMessage;
    let myService;
    let $componentController;
    beforeEach(()=>{
      module(($provide)=>{
        $provide.service('personService',()=>{
          return {
            getMessage:jasmine.createSpy("getMessage")
          }
        });
      });  
      inject(($injector,_$componentController_)=> {
        myService = $injector.get('personService');
        $componentController = _$componentController_;
        controller=$componentController('lalLol', {
          personService:myService
        });
      });
    });

    it('check firstname', () => {
      expect ( controller.firstName ).toEqual( 'Olgerd' );
    });

    it('check lastname', () => {
      expect ( controller.lastName ).toEqual( 'Olgerdovich' );
    });

    it("called function", () => {
      controller.getMessage();
      expect(myService.getMessage).toHaveBeenCalled();
    });
    it ("check message", () =>{
      let bindings={
        text:'message'
      }
      controller=$componentController('lalLol', null, bindings);
      expect( controller.text ).toEqual('message');
    });

    it ("check listSurname", () =>{
      let array=['Ivnov','Petrov', 'Sidorov'];
      let bindings={
        text:'message',
        listSurnames:array
      }
      controller=$componentController('lalLol', null, bindings);
      expect(controller.listSurnames.length).toBe(3);
    });
  })
  describe('Component: lalLol', function () {
    let element;
    let scope;
    beforeEach(inject(($rootScope, $compile)=>{
      scope = $rootScope.$new();
      element = angular.element('<lal-lol></<lal-lol>');
      element = $compile(element)(scope);
      scope.outside = '1.5';
      scope.$apply();
    }));
   
    it('should render the text', ()=> {
      let h1 = element.find('h1');
      let k=h1.text();
      expect(h1.text()).toBe('Unit Testing AngularJS 1.5');
    });
   
  });

});