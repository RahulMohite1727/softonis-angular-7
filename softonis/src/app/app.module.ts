import { ContactModule } from './contact/contact.module';
import { NgModule } from '@angular/core';

//import { BrowserModule } from '@angular/platform-browser';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { FeaturesModule } from './features/features.module';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { CareersModule } from './careers/careers.module';
import { PricingModule } from './pricing/pricing.module';

import { TeamModule } from './team/team.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    ServicesModule,
    AboutModule,
    BlogModule,
    CareersModule,
    PricingModule,
    TeamModule,
    HomeModule,
    FeaturesModule,
    ContactModule,
  

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
