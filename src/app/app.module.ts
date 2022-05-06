import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceHoldersModule } from './place-holders/place-holders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceHoldersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
