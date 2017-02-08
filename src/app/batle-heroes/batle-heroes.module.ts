import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { MaterialModule }       from '@angular/material';

import { BatleHeroesRouter }    from './batle-heroes.router';
import { BatleHeroes }          from './batle-heroes.component';
import { BatleService }         from './batle-heroes.service';
import { Animate }              from './batle-heroes.directive';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BatleHeroesRouter,
        MaterialModule
    ],
    declarations: [
        BatleHeroes,
        Animate
    ],
    providers: [ 
        BatleService
    ]
})
export class BatleHeroesModule {
    
}
