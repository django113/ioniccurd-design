import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurvayListPageRoutingModule } from './survay-list-routing.module';

import { SurvayListPage } from './survay-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurvayListPageRoutingModule
  ],
  declarations: [SurvayListPage]
})
export class SurvayListPageModule {}
