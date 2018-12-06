import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { Button1Component } from './button1.component';
import { Button2Component } from './button2.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SolutCardComponent } from './solut-card/solut-card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { SubscribeFrmComponent } from './subscribe-frm/subscribe-frm.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [HomeComponent, Button1Component, Button2Component, SolutionsComponent, SolutCardComponent, TestimonialsComponent, ClientsComponent, SubscribeFrmComponent, SubscribeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],


exports: [HomeComponent]
})
export class HomeModule { }
