import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Heroes } from '../processing-hero/heroes';
import { Hero } from '../processing-hero/heroes';
import { HeroDetailService } from './hero-detail.service';

@Component({
    moduleId: String(module.id),
    templateUrl:'./hero-detail.component.html'
})
export class HeroDetail implements OnInit {
    public currentHero: Hero;
    public value: number;
    public values: string;
    constructor(
        private route: ActivatedRoute,
        private service: HeroDetailService
    ) {}
    ngOnInit(): void {
        this.route.params
        .map((params: Params) => {
                return this.service.FindHero(+params['id']);
            })
        .subscribe ((hero: Hero) => {
                this.currentHero = hero;
            });
        this.value = this.service.testValue;
    }
    public incrTestValue(): void {
        this.service.testValue++;
        this.value++;
    }
    public myKeyUp(value: string): void {
        this.values = value;
        console.log(value);
    }
}
function logCall(target: any, key: string, value: any) {
    return {
        value: (...args: any[]) => {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            return result;
        }
    };
}
function MyDecorator(args: any){
    return function (target: any) {
            var original = target;
            function construct(constructor: any, args: any) {
                var c : any = function () {
                    return constructor.apply(this, args);
                }
                c.prototype = constructor.prototype;
                return new c();
            }
            var f : any = function (...args: any[]) {
                console.log("New: " + original.name); 
                return construct(original, args);
            }
            f.prototype = original.prototype;
            return f;
        }
}

@MyDecorator({
    names:"name"
})
class Person { 

  public name: string;
  public surname: string;

  constructor(name : string, surname : string) { 
    this.name = name;
    this.surname = surname;
  }
}
new Person('a', 'b');