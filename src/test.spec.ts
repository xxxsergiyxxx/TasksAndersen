import * as angular from 'angular';
import 'angular-mocks';
import { Person } from  './person';
describe('ModuleFirstModule', ()=>{
  const module=angular.mock.module;
  beforeEach(module('FirstModule'));
  describe('ComponentPerson',()=>{
    let controller: Person;
    let compile;
    let getMessage;
    let mock;
    let myService;
    beforeEach(()=>{
       mock={
         getMessage:jasmine.createSpy("getMessage")
       }
       module( ($provide)=>{
         $provide.service('personService', ()=>{
           return mock;
        });
       })
       inject(($injector,$componentController)=> {
        myService = $injector.get('personService');

        controller = $componentController('lalLol', {
          personService: myService
        });

      });
    });

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
  describe('Component: myComponent', function () {
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
      debugger;
      let h1 = element.find('h1');
      let k=h1.text();
      expect(h1.text()).toBe('Unit Testing AngularJS 1.5');
    });
   
  });

});