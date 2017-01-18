import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { HeroDetail }           from '../hero-detail/hero-detail.component';
import { HeroDetailService }    from '../hero-detail/hero-detail.service';
import { ViewHeroes }           from '../view-heroes/view-heroes.component';
import { HeroService }          from '../processing-hero/heroes';
import { AppComponent }         from './app.component';
import { Router }               from '../routing/routing.module';
import { PreloadBatleHeroes }   from './strategy.preload';
import { HeroView }             from '../view-heroes/hero/hero.component';

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
    HeroDetail,
    HeroView
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
