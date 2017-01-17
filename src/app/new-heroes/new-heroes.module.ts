import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';

import { NewHeroes }            from './new-heroes.component';
import { NewHeroesRouter }      from './new-heroes.module.router';
import { BigBoss }              from './big-boss/big-boss.component';
import { ListHeroes }           from './list-heroes/list-heroes.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewHeroesRouter
    ],
    declarations: [ 
        NewHeroes,
        BigBoss,
        ListHeroes 
    ]
})
export class NewHeroesModule {

}