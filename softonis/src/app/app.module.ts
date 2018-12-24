import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { CareersModule } from './careers/careers.module';
import { ContactModule } from './contact/contact.module';
import { FeaturesModule } from './features/features.module';
import { HomeModule } from './home/home.module';
import { PricingModule } from './pricing/pricing.module';
import { ServicesModule } from './services/services.module';
import { TeamModule } from './team/team.module';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
// HTTP Methods and Modules
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';
// Routing Modules
import { AppRoutingModule } from './app-routing.module';
// Components


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BlogModule,
    CareersModule,
    ContactModule,
    FeaturesModule,
    HomeModule,
    PricingModule,
    ServicesModule,
    TeamModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatButtonToggleModule,
    MatCardModule, CommonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
