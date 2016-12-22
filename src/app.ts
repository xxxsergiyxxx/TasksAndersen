import * as angular from 'angular';
import { Person }  from './person';
export class MyClass {
  public person: Person;
  public b: number;
  constructor() {
    this.person = new Person();
    this.person.firstName = 'Николай';
    this.person.lastName = 'Игорев';
  }
  public getArray(): number[] {
    const list: Array< number > = [1, 2, 3];
    return list;
  }
}
angular.module('FirstModule', [])
  .controller('MyClass', MyClass)
  .component('lalLol', {
    controller: MyClass,
    template: `<div>Hello ворлд, {{$ctrl.person.firstName}}</div>`
  });
