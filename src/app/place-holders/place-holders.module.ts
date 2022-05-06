import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceHoldersRoutingModule } from './place-holders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlaceholdersHomeComponent, PlaceholdersComponent],
  imports: [
    CommonModule,
    PlaceHoldersRoutingModule,
    SharedModule
  ],
  exports:[
    // PlaceholdersHomeComponent
  ]
})
export class PlaceHoldersModule { }
