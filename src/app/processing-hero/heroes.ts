import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Hero {
    public id: number;
    public name: string;
    public story: string;
    public image: string;
    constructor(
        id?: number,
        name?: string,
        story?: string,
        image?: string
    ) {
        this.id = id;
        this.name = name;
        this.story = story;
        this.image = image;
    }
}
@Injectable()
export class HeroService {
    public Heroes: Hero[];
    constructor(private http: Http) {

    }

    public getHeroes(): Promise <Hero[]> {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                const url = '/src/data/heroes.json';
                this.http.get(url)
                .toPromise().then(res => resolve(res.json()));
                }, 2000
            )
        }
    );
    }
}
