import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoVideoComponent } from './demo-video/demo-video.component';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { TeamCardsComponent } from './team-cards/team-cards.component';
import { FAQComponent } from './faq/faq.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [DemoVideoComponent, PricingCardsComponent, TeamCardsComponent, FAQComponent]
})
export class SharedModule { }
