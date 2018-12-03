import { NewsComponent } from './about/news/news.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [{
  path : 'about', component : AboutComponent
},
{
  path : 'news', component : NewsComponent
},
{ path : 'careers', component : CareersComponent
},
{
  path : 'contact', component : ContactComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
