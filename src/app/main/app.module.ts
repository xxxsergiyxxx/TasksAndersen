import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { HeroDetail }           from '../hero-detail/hero-detail.component';
import { HeroDetailService }    from '../hero-detail/hero-detail.service';
import { ViewHeroes }           from '../view-heroes/view-heroes.component';
import { HeroService }          from '../processing-hero/heroes';
import { NewHeroes }            from '../new-heroes/new-heroes.component';
import { AppComponent }         from './app.component';
import { Router }               from '../routing/routing.module';
import { NewHeroesModule }      from '../new-heroes/new-heroes.module';
import { PreloadBatleHeroes }   from './strategy.preload';

@NgModule({
  imports: [
    FormsModule,
    Router,
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
     ViewHeroes,
    HeroDetail
  ],
  exports: [
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
      HeroDetailService,
      HeroService,
      PreloadBatleHeroes
  ]
})
export class AppModule { }
