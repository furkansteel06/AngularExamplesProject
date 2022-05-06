import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceHoldersRoutingModule } from './place-holders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';

@NgModule({
  declarations: [PlaceholdersHomeComponent],
  imports: [
    CommonModule,
    PlaceHoldersRoutingModule
  ],
  exports:[
    PlaceholdersHomeComponent
  ]
})
export class PlaceHoldersModule { }
