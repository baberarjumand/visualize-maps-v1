import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisMapPageRoutingModule } from './vis-map-routing.module';

import { VisMapPage } from './vis-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisMapPageRoutingModule
  ],
  declarations: [VisMapPage]
})
export class VisMapPageModule {}
