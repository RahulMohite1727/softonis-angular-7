//import { BrowserModule } from '@angular/platform-browser';
//import {BrowserModule} from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { CareersModule } from './careers/careers.module';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { FeaturesModule } from './features/features.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { PricingModule } from './pricing/pricing.module';
import { ServicesModule } from './services/services.module';
import { TeamModule } from './team/team.module';













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
