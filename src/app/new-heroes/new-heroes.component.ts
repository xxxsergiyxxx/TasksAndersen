import { Component }                from '@angular/core';
import { Hero, HeroService }        from '../processing-hero/heroes';

@Component({
    moduleId: String(module.id),
    templateUrl: './new-heroes.component.html',
    styleUrls: ['./new-heroes.component.css']
})
export class NewHeroes {
    public name: string;
    public story: string;
    public id: number;
    public hero: Hero;
    constructor(private heroService: HeroService) {
    }

    public addHero() {
        this.id = this.heroService.Heroes.length + 1;
        this.heroService.Heroes.push(new Hero(this.id, this.name, this.story));
        this.name = '';
        this.story = '';
    }

    public onSubmit() {
        alert('sssss');
    }
    public setValid(model: any): void {
        console.log(model);
    }
}