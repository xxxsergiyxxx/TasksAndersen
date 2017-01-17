import { Component }            from '@angular/core';

@Component({
    moduleId: String(module.id),
    selector: 'list-hero',
    templateUrl: './list-heroes.component.html',
    styleUrls: ['./list-heroes.component.css'],
})
export class ListHeroes {
    constructor() {

    }
    
    public toBigBoss() {
        //console.log(this.route);
    }
}