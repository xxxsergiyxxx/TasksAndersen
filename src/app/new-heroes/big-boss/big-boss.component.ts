import { Component }                from '@angular/core';
import { Hero, HeroService }        from '../../processing-hero/heroes';

@Component({
    selector: 'bigboss',
    moduleId: String(module.id),
    templateUrl: './big-boss.component.html',
    styleUrls: ['./big-boss.component.css']
})
export class BigBoss {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    hero = new Hero(18, 'Dr. WhatIsHisWayTooLongName', this.powers[0], 'Dr. What');
    submitted = false;

    constructor(private heroService: HeroService) {

    }
    public setValid(model: any): void {
        console.log(model);
    }

    onSubmit() {
        this.submitted = true;
    }

    addHero() {
        this.hero = new Hero(42, '', '','');
    }

    log(name: any) {
        console.log(name);
    }
}