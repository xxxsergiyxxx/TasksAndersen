import { Component, OnInit } from '@angular/core';
import { Heroes, Hero } from '../processing-hero/heroes';

@Component({
    moduleId: String(module.id),
    templateUrl: './view-heroes.component.html',
    styleUrls: ['./view-heroes.component.css']
})
export class ViewHeroes implements OnInit {
    public heroes: Hero[];
    ngOnInit(): void {
        this.heroes = Heroes;
    }
}