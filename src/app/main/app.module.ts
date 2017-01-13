import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }     from './app.component';
import { Router }           from '../routing/routing.module';
import { NewHeroesModule }  from '../new-heroes/new-heroes.module';

@NgModule({
  imports: [
    FormsModule,
    Router,
    BrowserModule,
    NewHeroesModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
