<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCrdComponent } from './contact/contact-crd/contact-crd.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { NewsComponent } from './about/news/news.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> aa93f7cabe7d6e75ac189c06abd1a18262be9abe
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [

      
 {path:'home',component:HomeComponent},
 {path:'pricing',component:PricingComponent}

<<<<<<< HEAD










// const ContactComponent = [
//   {path : 'contact', component : ContactCrdComponent},
//   {path : 'contact', component : ContactInfoComponent},
//   {path : 'contact', component : ContactFormComponent},
//   {path : 'contact', component : ContactMapComponent},
// ];


const routes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'news', component : NewsComponent},
  {path : 'contact', component : ContactComponent}
=======
   
>>>>>>> aa93f7cabe7d6e75ac189c06abd1a18262be9abe
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
