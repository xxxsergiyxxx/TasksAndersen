import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';

import { NewHeroes }            from './new-heroes.component';
import { NewHeroesRouter }       from './new-heroes.module.router';
import { BigBoss }              from './big-boss/big-bos.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewHeroesRouter
    ],
    declarations: [ 
        NewHeroes,
        BigBoss 
    ]
})
export class NewHeroesModule {

}