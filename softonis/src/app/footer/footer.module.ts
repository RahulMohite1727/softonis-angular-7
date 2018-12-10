//import { FooterComponent } from './../shared/layout/footer/footer.component';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
