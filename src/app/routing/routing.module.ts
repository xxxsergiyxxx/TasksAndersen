import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetail }           from '../hero-detail/hero-detail.component';
import { HeroDetailService }    from '../hero-detail/hero-detail.service';
import { ViewHeroes }           from '../view-heroes/view-heroes.component';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';

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
        component: ViewHeroes
    },
    {   
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        CommonModule
    ],
    declarations: [
        ViewHeroes,
        HeroDetail
    ],
    exports: [
        RouterModule 
    ],
    providers: [HeroDetailService]
})
export class Router {

}