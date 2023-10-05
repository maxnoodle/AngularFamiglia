import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppFiglioComponent} from './figlio/figlio.component';
import {AppPadreComponent} from './padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFiglioComponent,
    AppPadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
