import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamCardsComponent } from './team-cards/team-cards.component';

@NgModule({
  declarations: [TeamComponent, TeamCardsComponent],
  imports: [
    CommonModule
  ]
})
export class TeamModule { }
