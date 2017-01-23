import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NewHeroes } from './new-heroes.component';
import { NewHeroesRouter } from './new-heroes.module.router';
import { BigBoss } from './big-boss/big-boss.component';
import { ListHeroes } from './list-heroes/list-heroes.component';
import { AsyncValidator } from './big-boss/big-boss.validator';
import { BigBossService } from './big-boss/big-boss.service';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewHeroesRouter,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule.forRoot()
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