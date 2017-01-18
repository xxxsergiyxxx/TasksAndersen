import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService, Hero } from '../processing-hero/heroes';
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
        private service: HeroDetailService,
        private HeroesService: HeroService
    ) {}
    ngOnInit(): void {
        this.route.params
        .map((params: Params) => {
                return this.service.FindHero(+params['id']);
            })
        .subscribe ((hero: Hero) => {
                this.currentHero = hero;
            });
        console.log(this.currentHero);
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