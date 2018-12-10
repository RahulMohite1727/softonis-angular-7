import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCrdComponent } from './contact/contact-crd/contact-crd.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './about/news/news.component';
import { NgModule, Component } from '@angular/core';
import { PricingComponent } from './pricing/pricing.component';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'pricing',component:PricingComponent},
 {path : 'about', component : AboutComponent},
  {path : 'news', component : NewsComponent},
  {path : 'contact', component : ContactComponent}
];


// const routes: Routes = [
//   {path : 'about', component : AboutComponent},
//   {path : 'news', component : NewsComponent},
//   {path : 'contact', component : ContactComponent}
  
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
