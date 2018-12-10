import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { HeadmsgComponent } from './headmsg/headmsg.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { FreqQuestionComponent } from './freq-question/freq-question.component';

@NgModule({
  declarations: [TeamComponent, HeadmsgComponent, TeamMemberComponent, FreqQuestionComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[TeamComponent]
})
export class TeamModule { }
