import { Injectable } from '@angular/core';
import { Heroes } from '../processing-hero/heroes';
import { Hero } from '../processing-hero/heroes';

@Injectable()
export class HeroDetailService {
    public testValue: number=0;
    public FindHero(id: number): Hero{
        return Heroes.find( (elem: Hero) => {
            return elem.id ===id;
        })
    }
} 