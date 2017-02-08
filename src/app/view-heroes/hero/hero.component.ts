import { Component, 
            Input, 
            Output, 
            EventEmitter,
            OnChanges, 
            SimpleChanges, 
            DoCheck,
            ViewEncapsulation }             from '@angular/core';
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
    @Output() changeNam = new EventEmitter<string>();
    constructor() {

    }

    change() {
        this.test="asad" + this.test;
        console.log('move');
    }

    public testEvent() {
        this.changeNam.emit(this.hero.name + '' + this.hero.id); 
    }
}