import  * as angular from 'angular';
import 'angular-mocks';
import  FormSearchService  from './formSearch.service';
//import { Man } from './types';
//import { MansData } from './types';
describe('Testing service personService.',()=> {
  const module = angular.mock.module;
  let injector: any;
  let service: FormSearchService;
  let httpBackend: ng.IHttpBackendService;
  beforeEach(module('mainApp'));

  describe('testing controller for personService', ()=>{ 
    beforeEach(()=>{
      inject(($injector)=>{
        injector=$injector;
        service=injector.get('formSearchService');
        httpBackend=injector.get('$httpBackend');
      });
      
    });

    it('1) Test calling ', ()=>{
      const tasks=["task1", "task2", "task3"];
      service.getData(tasks);
      spyOn(service,'encryptTask');
      service.encrypting();
      expect(service.encryptTask.calls.count()).toEqual(tasks.length);
    });

    it('4) Test expect value', () => {
      const tasks = ["task1"];
      service.setTasks(tasks);
      spyOn(service,'encryptTask');
      service.encrypting();
      expect(service.encryptTask).toHaveBeenCalledWith(tasks[0]);
    })

    it('5) Search man', () => {
      service.mansData=[
      {
         "firstName": "Valera",
         "lastName": "Volosyan",
        "tasks":[ "task1", "task2", "task3"]
      },
      {
        "firstName":"Igor",
        "lastName":"Volosyan",
        "tasks":[ "task1", "task2", "task3"]
      }]
      expect(service.searchMan('Valera', 'Volosyan')).toEqual(0);
    })

  })
})
