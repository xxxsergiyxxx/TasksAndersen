import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';

import { BatleHeroesRouter }    from './batle-heroes.router';
import { BatleHeroes }          from './batle-heroes.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BatleHeroesRouter
    ],
    declarations: [
        BatleHeroes
    ]
})
export class BatleHeroesModule {
    
}
