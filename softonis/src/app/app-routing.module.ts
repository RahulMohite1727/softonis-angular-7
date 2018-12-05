import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';

import { NewsComponent } from './about/news/news.component';

import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  {path : 'about', component : AboutComponent},
 {path : 'news', component : NewsComponent},
 {path : 'careers' , component: CareersComponent },
 {path : 'blog' , component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
