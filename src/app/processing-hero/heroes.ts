import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

interface skill {
    name: string,
    damage: number,
    image: string
}

export class Hero {
    constructor(
        public id?: number,
        public name?: string,
        public story?: string,
        public image?: string
    ) {}
}

export class Skill {
    constructor (
        public id?: number,
        public heroid?: number,
        public skill?: skill
    ){}
}
@Injectable()
export class HeroService {
    public Heroes: Hero[];
    public Skills: Skill[];
    public myTeam: Hero[];
    public BigBosses: Hero[];
    public maxDamage: number = 1000;
    constructor(private http: Http) {
        this.myTeam = [];
    }

    public getHeroes(): Promise <Hero[]> {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                const url = '/src/data/heroes.json';
                this.http.get(url)
                .toPromise().then(res => resolve(res.json()));
                }, 200)
            }
        );
    }

    public getSkills(): Observable <Response> {
        const url = '/src/data/skills.json';
        return this.http.get(url);
    }

    public getBigBosses(): Observable <Response> {
        const url = '/src/data/big_bosses.json';
        return this.http.get(url);
    }
}
