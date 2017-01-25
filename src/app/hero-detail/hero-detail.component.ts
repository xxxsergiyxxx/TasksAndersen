import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService, Hero, Skill } from '../processing-hero/heroes';
import { HeroDetailService } from './hero-detail.service';

@Component({
    moduleId: String(module.id),
    templateUrl: './hero-detail.component.html',
    styleUrls:['./hero-detail.css']
})
export class HeroDetail implements OnInit {
    public currentHero: Hero;
    public value: number;
    public values: string;
    public skills: Skill[];
    public damage: Object[];
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
        this.damage = [];
        this.skills = this.route.snapshot.data['skills'];
        console.log(this.skills);
        this.skills.forEach((element: Skill, index: number) => {
            this.damage.push(
                {
                    'width': element.skill.damage * 100/this.HeroesService.maxDamage + '%'
                }
            )
        });
        console.log(this.damage);
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
