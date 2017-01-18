import { Component, Input, Output }             from '@angular/core';

import { Hero }                                 from '../../processing-hero/heroes';

@Component({
    moduleId: String(module.id),
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroView {
    @Input() hero: Hero;
    constructor() {

    }
}