import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurvayDetailsPageRoutingModule } from './survay-details-routing.module';

import { SurvayDetailsPage } from './survay-details.page';
import {NgxPaginationModule} from 'ngx-pagination';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurvayDetailsPageRoutingModule,
    NgxPaginationModule,
    SwiperModule,
  ],
  declarations: [SurvayDetailsPage]
})
export class SurvayDetailsPageModule {}
