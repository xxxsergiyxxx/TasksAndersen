import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

import { BatleHeroes }          from './batle-heroes.component';
import { BatleHeroesResolver}   from './batle-heroes.resolve.service';

const routes: Routes = [
    {
        path: '',
        component: BatleHeroes,
        resolve: {
            bigBosses:BatleHeroesResolver
        }
    }
    ]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        BatleHeroesResolver
    ]
})
export class BatleHeroesRouter {

}