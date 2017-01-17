import { Injectable }               from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
        ActivatedRouteSnapshot  }   from'@angular/router';
import { Hero, HeroService }        from '../processing-hero/heroes';

@Injectable()
export class HeroResolver implements Resolve<Hero[]> {
    constructor(private service: HeroService, private route: Router) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Promise<Hero[]> {
        return this.service.getHeroes().then( res => {
            this.service.Heroes = res.json();
        })
    }
}