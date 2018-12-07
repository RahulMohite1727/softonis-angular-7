import { FeaturesComponent } from './features/features.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path : 'features' , component: FeaturesComponent},
  {path : 'team' , component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
