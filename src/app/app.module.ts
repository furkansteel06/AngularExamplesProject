import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceHoldersModule } from './place-holders/place-holders.module';
import { TablesModule } from './tables/tables.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [ // Sayfa yönlendirmelerinde not-found comp. geliyordu çözümlendi (öncelik ayarlandı).
    BrowserModule,
    PlaceHoldersModule,
    TablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
