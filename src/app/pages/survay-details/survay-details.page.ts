import {ViewEncapsulation,Component,OnInit,AfterContentChecked,ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-survay-details',
  templateUrl: './survay-details.page.html',
  styleUrls: ['./survay-details.page.scss'],
  // encapsulation: ViewEncapsulation.None
  encapsulation:ViewEncapsulation.None

})
export class SurvayDetailsPage implements AfterContentChecked{
  @ViewChild('swiper') swiper:SwiperComponent;

  config:SwiperOptions={
    slidesPerView:1,
    spaceBetween:50,
    pagination:true

  }
  constructor() {};

  ngAfterContentChecked(){
    if(this.swiper){
      this.swiper.updateSwiper({});
    }

  }
  onSlideChange(e){
    console.log('changed',e);
  }
  touchAllowed=false;
  prev(){
    this.swiper.swiperRef.slidePrev(500);
  }
  next(){
    this.swiper.swiperRef.slideNext(500);
  }

  toggleTouch(){
    this.touchAllowed=!this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove=this.touchAllowed;
  }

  // ngOnInit() {
  // }

}
