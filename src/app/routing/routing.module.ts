import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetail }           from '../hero-detail/hero-detail.component';
import { ViewHeroes }           from '../view-heroes/view-heroes.component';
import { HeroService }          from '../processing-hero/heroes';
import { NewHeroes }            from '../new-heroes/new-heroes.component';
import { HeroResolver}          from '../view-heroes/view-heroes.resolve.service';
import { PreloadBatleHeroes }   from '../main/strategy.preload';

const routes: Routes = [
    {
        path: 'hero/:id',
        component: HeroDetail,
        data: {
                name: 'test'
            }
    },
    {
        path: 'view',
        component: ViewHeroes,
        resolve : {
            heroes: HeroResolver
        }
    },
    {   
        path: 'newHeroes', 
        loadChildren: '../new-heroes/new-heroes.module#NewHeroesModule'
    },
    {   
        path: 'batleHeroes', 
        loadChildren: '../batle-heroes/batle-heroes.module#BatleHeroesModule',
        data: {
            preload: true
        }
    },
    {   
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadBatleHeroes
        })
    ],
    exports: [
        RouterModule 
    ],
    providers: [
        HeroResolver
    ]
})
export class Router {

}