import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
export class Hero {
    constructor(
        public id?: number,
        public name?: string,
        public story?: string,
        public image?: string
    ) {}
}
interface skill {
    name: string,
    damage: number
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
    constructor(private http: Http) {

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
}
