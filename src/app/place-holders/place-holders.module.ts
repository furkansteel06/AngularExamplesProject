import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceHoldersRoutingModule } from './place-holders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [PlaceholdersHomeComponent, PlaceholdersComponent, SegmentComponent],
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
