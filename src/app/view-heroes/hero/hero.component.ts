import { Component, 
            Input, 
            Output, 
            OnChanges, 
            SimpleChanges, 
            DoCheck }             from '@angular/core';
import { Hero }                   from '../../processing-hero/heroes';

@Component({
    moduleId: String(module.id),
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroView {
    @Input() hero: Hero;
    @Input() test: Object;

    constructor() {

    }

    change() {
        this.test="asad" + this.test;
        console.log('move');
    }
}