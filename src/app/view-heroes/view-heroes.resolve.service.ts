import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Hero, HeroService, Skill } from '../processing-hero/heroes';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class HeroResolver implements Resolve<Hero[]> {
    constructor(private service: HeroService, private route: Router) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Hero[]> {
        if(this.service.Heroes) {
            return new Promise<Hero>(resolve => {
                resolve();
            });
        } else {
            return this.service.getHeroes().then<Hero[]>((res: Hero[]) => {
                return this.service.Heroes = res;
            });
        }
    }
}
@Injectable()
export class SkillResolver implements Resolve<Skill[]> {
    constructor(private service: HeroService, private heroResolve: HeroResolver) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill[]> {
        const id = +route.params['id'];
        return new Observable<Skill[]>((observer: Observer<any>) => {
                this.heroResolve.resolve(route, state).then(res => {
                        this.service.getSkills().map(res => {
                            return this.service.Skills = res.json();
                    }).subscribe(res => {
                        const currentSkils: Skill[] = [];
                        Observable.from(res).filter((res: Skill) => {
                            return +res.heroid === id;
                        }).subscribe(res => {
                            currentSkils.push(res);
                        },
                        error => {
                            console.log('error');
                        }, 
                        () => {
                            observer.next(currentSkils);
                            observer.complete();
                        });
                    });
                });
        });
    }
}