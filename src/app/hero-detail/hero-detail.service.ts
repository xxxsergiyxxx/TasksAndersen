import { Injectable } from '@angular/core';
import { Hero, HeroService } from '../processing-hero/heroes';

@Injectable()
export class HeroDetailService {

    constructor(private heroService: HeroService) {

    }
    public testValue: number=0;
    public FindHero(id: number): Hero{
        return this.heroService.Heroes.find( (elem: Hero) => {
            return elem.id ===id;
        })
    }
} 