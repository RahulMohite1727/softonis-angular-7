import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [

  {path:'',component:HomeComponent},
 {path:'home',component:HomeComponent},
 {path:'pricing',component:PricingComponent},
 {path:'team',component:TeamComponent},
 {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
