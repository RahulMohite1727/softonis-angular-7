// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { CareersModule } from './careers/careers.module';
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
    ContactModule,
    PricingModule,
    TeamModule,
    HomeModule,
    FeaturesModule,
    // NgbModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
