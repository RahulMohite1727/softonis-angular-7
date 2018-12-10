//import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './about/events/events.component';
import { FeaturesComponent } from './features/features.component';
import { GeneralInfoComponent } from './about/news/general-info/general-info.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './about/news/news.component';
import { NgModule, Component } from '@angular/core';
import { PricingComponent } from './pricing/pricing.component';
import { ProjectsComponent } from './about/projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';





// const dashRoutes=[
//   {path: 'home', component: HomeComponent }
//  ]
const routes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'news', component : NewsComponent},
  {path : 'project', component : ProjectsComponent},
  {path : 'event', component : EventsComponent},
  {path : 'navbar', component : NavbarComponent},
  {path : 'general-info', component : GeneralInfoComponent},

  {path : 'about', component : AboutComponent},
{  path : 'news', component : NewsComponent},
  {path : 'features' , component: FeaturesComponent},
  {path : 'team' , component: TeamComponent},
  
  {path : 'about', component : AboutComponent},
 {path : 'news', component : NewsComponent},
 {path : 'careers' , component: CareersComponent },
 {path : 'blog' , component: BlogComponent },
 {path : 'contact' , component: ContactComponent },
 {path : 'prices' , component: PricingComponent },
 {path : 'team' , component: TeamComponent },
 {path : 'features' , component: FeaturesComponent },
 {path : 'services' , component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
