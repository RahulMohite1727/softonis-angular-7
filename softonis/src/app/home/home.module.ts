import { NavbarModule } from './../navbar/navbar.module';
import { FooterModule } from './../footer/footer.module';
import { FooterComponent } from './../shared/layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavBarComponent } from '../shared/layout/nav-bar/nav-bar.component';
import { BtnLearnmoreComponent } from './btn-learnmore/btn-learnmore.component';
import { BtnContactusComponent } from './btn-contactus/btn-contactus.component';

@NgModule({
  declarations: [HomeComponent, BtnLearnmoreComponent, BtnContactusComponent],
  imports: [
    CommonModule,
  
  ]
})
export class HomeModule { }
