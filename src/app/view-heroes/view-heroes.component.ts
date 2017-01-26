import { Component, OnInit } from '@angular/core';

import { HeroService, Hero } from '../processing-hero/heroes';

@Component({
    //moduleId: String(module.id),
    templateUrl: './view-heroes.component.html',
    styleUrls: ['./view-heroes.component.css']
})
export class ViewHeroes implements OnInit {
    public heroes: Hero[];
    public show: boolean = true;
    public test: Object;
    constructor(private service: HeroService) {

    }
    ngOnInit(): void {
        this.heroes = this.service.Heroes;
        this.test = {str:'hz'};
    }
    showComponent(flag: boolean) {
        this.show = flag;
    }
}
