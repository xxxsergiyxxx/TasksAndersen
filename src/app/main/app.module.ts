import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule,
         JsonpModule }          from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { MaterialModule }       from '@angular/material';
import { MdDialog  }            from '@angular/material';

import { AppComponent }         from './app.component';
import { PreloadBatleHeroes }   from './strategy.preload';
import { LeftColumnModule }     from '../left.column.module/left.column.module';

@NgModule({
  imports: [
    FormsModule,
    JsonpModule,
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    LeftColumnModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
      PreloadBatleHeroes,
      MdDialog
  ],
  entryComponents: [
    //HeroModalDialog
  ]
})
export class AppModule { }
