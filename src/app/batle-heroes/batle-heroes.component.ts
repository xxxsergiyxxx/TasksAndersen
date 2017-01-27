import { Component, OnInit }               from '@angular/core';
import { ActivatedRoute }                  from '@angular/router';
import { Observable }                      from 'rxjs/Observable';

import { PreloadBatleHeroes }              from '../main/strategy.preload';
import { HeroService, Hero }               from '../processing-hero/heroes';
import { BatleService}                     from './batle-heroes.service';

@Component({
    moduleId: String(module.id),
    selector: 'batle-heroes',
    templateUrl: './batle-heroes.component.html',
    styleUrls: ['./batle-heroes.component.css']
})

export class BatleHeroes {
    public sessionId: Observable<string>;
    public token: Observable<string>;
    public modules: string[];
    public heroes: Hero[];
    public bigBosses: Hero[];
    public start: number;
    public end: number;
    public shift: number;
    public rightArrowStyle: Object;
    public leftArrowStyle: Object;
    public selection: Object;
    private count: number = 4;
    
    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: PreloadBatleHeroes,
        private heroService: HeroService,
        private service: BatleService
  ) {}

    public ngOnInit(): void {
        this.start = 0;
        this.shift = 0;
        this.heroes = this.heroService.myTeam;
        this.bigBosses = this.heroService.BigBosses;
        this.leftArrowStyle = this.service.disabledStyle;
        if(this.heroes && this.heroes.length >= 3){
            this.end = this.count;
            this.rightArrowStyle = this.service.activeStyle;
        } else {
            this.end = this.heroes.length;
            this.rightArrowStyle = this.service.disabledStyle;
        }
    }

    public next(): void {
        if(this.rightArrowStyle != this.service.disabledStyle) {
            this.shift++;
            if(this.shift + this.count === this.heroes.length) {
                this.leftArrowStyle = this.service.activeStyle;
                this.rightArrowStyle = this.service.disabledStyle;
            }
        }
    }

    public back(): void {
        if(this.leftArrowStyle != this.service.disabledStyle) {
            this.shift--;
            if(this.shift === 0) {
                this.rightArrowStyle = this.service.activeStyle;
                this.leftArrowStyle = this.service.disabledStyle;
            }
        }
    }

    public select() {
        this.selection = this.service.selection;
    }
}