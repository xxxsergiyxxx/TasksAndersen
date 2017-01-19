import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

import { BatleHeroes }          from './batle-heroes.component';

const routes: Routes = [
    {
        path: '',
        component: BatleHeroes
    }
    ]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BatleHeroesRouter {

}