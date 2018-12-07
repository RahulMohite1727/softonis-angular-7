<<<<<<< HEAD
import { FeaturesComponent } from './features/features.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
=======


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';

import { NewsComponent } from './about/news/news.component';

import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';


>>>>>>> 94a22a975516f6c128f97f1e860ff7449d2dcd99

// const dashRoutes=[
//   {path: 'home', component: HomeComponent }
//  ]
const routes: Routes = [
<<<<<<< HEAD
  {path : 'features' , component: FeaturesComponent},
  {path : 'team' , component: TeamComponent}
=======
 
  {path: 'home', component: HomeComponent },
  
  {path : 'about', component : AboutComponent},
 {path : 'news', component : NewsComponent},
 {path : 'careers' , component: CareersComponent },
 {path : 'blog' , component: BlogComponent },
 {path : 'contact' , component: ContactComponent },
 {path : 'prices' , component: PricingComponent },
 {path : 'team' , component: TeamComponent },
 {path : 'features' , component: FeaturesComponent },
 {path : 'services' , component: ServicesComponent },
>>>>>>> 94a22a975516f6c128f97f1e860ff7449d2dcd99
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
