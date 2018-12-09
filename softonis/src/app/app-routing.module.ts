import { GeneralInfoComponent } from './about/news/general-info/general-info.component';
import { NewsComponent } from './about/news/news.component';

import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './about/projects/projects.component';
import { EventsComponent } from './about/events/events.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'news', component : NewsComponent},
  {path : 'project', component : ProjectsComponent},
  {path : 'event', component : EventsComponent},
  {path : 'navbar', component : NavbarComponent},
  {path : 'general-info', component : GeneralInfoComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
