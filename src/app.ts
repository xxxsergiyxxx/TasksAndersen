import * as angular from 'angular';
import person  from "./person";
class MyClass{

}
angular.module('aaaa',[])
		.component('lalLol', {
			controller: MyClass,
			template:`<div>Hello ворлд</div>`
		});
console.log(person.firstName + ' ' + person.lastName);