import { Component }                from '@angular/core';
import { Hero, HeroService }        from '../../processing-hero/heroes';

@Component({
    selector: 'bigboss',
    moduleId: String(module.id),
    templateUrl: './big-boss.component.html',
    styleUrls: ['./big-boss.component.css']
})
export class BigBoss {
    public name: string;
    public story: string;
    public id: number;
    public hero: Hero;
    public image: string;
    constructor(private heroService: HeroService) {
    }

    public addHero() {
        this.id = this.heroService.Heroes.length + 1;
        this.heroService.Heroes.push(new Hero(
            this.id, 
            this.name, 
            this.story, 
            this.image)
            );
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