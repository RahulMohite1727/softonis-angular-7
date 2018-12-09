<<<<<<< HEAD
import { GeneralInfoComponent } from './about/news/general-info/general-info.component';
||||||| merged common ancestors
=======
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

>>>>>>> c9388de7d200480f56ca5328f3fbc39cd6961e64
import { NewsComponent } from './about/news/news.component';

import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { ProjectsComponent } from './about/projects/projects.component';
import { EventsComponent } from './about/events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
||||||| merged common ancestors
=======
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
>>>>>>> c9388de7d200480f56ca5328f3fbc39cd6961e64


>>>>>>> 94a22a975516f6c128f97f1e860ff7449d2dcd99

// const dashRoutes=[
//   {path: 'home', component: HomeComponent }
//  ]
const routes: Routes = [
<<<<<<< HEAD
  {path : 'about', component : AboutComponent},
  {path : 'news', component : NewsComponent},
  {path : 'project', component : ProjectsComponent},
  {path : 'event', component : EventsComponent},
  {path : 'navbar', component : NavbarComponent},
  {path : 'general-info', component : GeneralInfoComponent},

||||||| merged common ancestors
  {path : 'about', component : AboutComponent},
{  path : 'news', component : NewsComponent},
=======
<<<<<<< HEAD
  {path : 'features' , component: FeaturesComponent},
  {path : 'team' , component: TeamComponent}
=======
 
  {path: 'home', component: HomeComponent },
>>>>>>> c9388de7d200480f56ca5328f3fbc39cd6961e64
  
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
