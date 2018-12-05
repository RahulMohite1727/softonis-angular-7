import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { HeadComponent } from './head/head.component';
import { PricecardComponent } from './pricecard/pricecard.component';

@NgModule({
  declarations: [PricingComponent, HeadComponent, PricecardComponent],
  imports: [
    CommonModule,
   
  ],
  exports:[PricingComponent]
 })

 export class PricingModule { }
