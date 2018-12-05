import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ContactModule } from './contact/contact.module';
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
    ContactModule,
    PricingModule,
    TeamModule,
    HomeModule,
    FeaturesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
