import * as angular from 'angular';
import 'angular-mocks';
import { MyClass } from  './app';
describe('MyClass', ()=>{
  let controller: MyClass;
  beforeEach(angular.mock.module("FirstModule"));
  beforeEach(inject(($controller) => {
        controller = $controller("MyClass", {
        });
    }));
    it("should get message from contoller", () => {
        expect(controller.getArray().length).toBe(3);
    });
});