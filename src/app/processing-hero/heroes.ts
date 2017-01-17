import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export class Hero {
    public id: number;
    public name: string;
    public story: string;
    constructor(
        id: number,
        name: string,
        story: string
    ){
        this.id = id;
        this.name = name;
        this.story = story;
    }
}
@Injectable()
export class HeroService {
    public Heroes: Hero[];

    constructor(private http: Http) {

    }
    
    public getHeroes(): Promise <any> {
        const url: string = '/src/data/heroes.json';
        return this.http.get(url)
        .toPromise();
    }
}
// export const Heroes: Hero[] =[
//     new Hero(1, 'batman', 'kill parents'),
//     new Hero(2, 'superman', 'dead world'),
//     new Hero(3, 'iron man', 'dead parents')
// ]