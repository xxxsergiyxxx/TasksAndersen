import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { NewHeroes }            from './new-heroes.component';
import { NewHeroesRouter }      from './new-heroes.module.router';
import { BigBoss }              from './big-boss/big-boss.component';
import { ListHeroes }           from './list-heroes/list-heroes.component';
import { AsyncValidator }       from './big-boss/big-boss.validator';
import { BigBossService }       from './big-boss/big-boss.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewHeroesRouter,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        BigBoss,
        ListHeroes,
        NewHeroes
    ],
    providers: [
        AsyncValidator,
        BigBossService
    ]
})
export class NewHeroesModule {

}