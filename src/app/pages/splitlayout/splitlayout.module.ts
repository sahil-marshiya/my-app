import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitlayoutPageRoutingModule } from './splitlayout-routing.module';

import { SplitlayoutPage } from './splitlayout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitlayoutPageRoutingModule
  ],
  declarations: [SplitlayoutPage]
})
export class SplitlayoutPageModule {}
