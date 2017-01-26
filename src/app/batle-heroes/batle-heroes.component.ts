import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';

import { PreloadBatleHeroes }   from '../main/strategy.preload';
import { HeroService, Hero }               from '../processing-hero/heroes';

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

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: PreloadBatleHeroes,
        private heroService: HeroService
  ) {}

    ngOnInit() {
        this.start = 0;
        this.heroes = this.heroService.myTeam;
        this.bigBosses = this.heroService.BigBosses;
        if(this.bigBosses&&this.bigBosses.length>=3){
            this.end = 3
        } else {
            this.end = this.bigBosses.length;
        }
        console.log(this.bigBosses);
        console.log(this.heroes);
    }
}