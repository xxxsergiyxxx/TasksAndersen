import * as angular from 'angular';
import { Person }  from './person';
import { PersonService} from './person.service'
export class MyClass {
  constructor() {
  }
}
angular.module('FirstModule', [])
  .controller('myClass', MyClass)
  .service('personService', ['$http', PersonService])
  .component('lalLol', {
    controller: ['personService', Person],
    template: `<div>Hello ворлд, {{$ctrl.firstName}}
                {{$ctrl.getMessage();}}
                <h1>Unit Testing AngularJS 1.5</h1>
              </div>`
  });
