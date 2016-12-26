import  * as angular from 'angular';
import 'angular-mocks';
import { PersonService } from './person.service';
describe('Testing service personService.',()=> {
  const module=angular.mock.module;
  let injector;
  let service:PersonService;
  let http;
  let httpBackend;
  let authRequestHandler;
  beforeEach(module('FirstModule'));
  describe('testing controller for personService', ()=>{ 
    beforeEach(()=>{
      inject(($injector)=>{
        injector=$injector;
        service=injector.get('personService');
        httpBackend=injector.get('$httpBackend');
      });
      
    });
    it('1) test http', ()=>{
      let response={tasks:["task1", "task2", "task3"]};
      httpBackend.expectGET('json/tasks.json').respond(response);
      jasmine.addCustomEqualityTester(angular.equals);
      service.getTasks();
      httpBackend.flush();
      expect(service.viewTasks()).toEqual(response.tasks);  
        
    });
    it('2) test length counts array', ()=>{
      let response={tasks:["task1", "task2", "task3"]};
      httpBackend.expectGET('json/tasks.json').respond(response);
      jasmine.addCustomEqualityTester(angular.equals);
      service.getTasks();
      httpBackend.flush();
      expect(service.viewTasks().length).toBe(response.tasks.length);
    });
    it('3) Test calling ', ()=>{
      let tasks=["task1", "task2", "task3"];
      service.setTasks(tasks);
      service.encryptTask=jasmine.createSpy('encryptTask');
      service.encrypting();
      expect(service.encryptTask.calls.count()).toEqual(tasks.length);
    });
    it('4) Test expect value', () =>{
      let tasks=["task1"];
      service.setTasks(tasks);
      service.encryptTask=jasmine.createSpy('encryptTask');
      service.encrypting();
      expect(service.encryptTask).toHaveBeenCalledWith(tasks[0]);
    })
  })
})
