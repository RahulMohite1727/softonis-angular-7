import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { CareersComponent } from './careers/careers.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, FeaturesComponent, ProductServicesComponent, AboutComponent, TeamComponent, CareersComponent, PricingComponent, BlogComponent, ContactUsComponent]
})
export class HomeModulesModule { }
