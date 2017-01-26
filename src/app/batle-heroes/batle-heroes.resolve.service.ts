import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
}                     from '@angular/router';

import { Hero, HeroService }       from '../processing-hero/heroes';

@Injectable()
export class BatleHeroesResolver implements Resolve<Hero []> {
    constructor(private heroService: HeroService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
        return this.heroService.getBigBosses().map(res =>{
            return this.heroService.BigBosses = res.json();
        });
    }
}