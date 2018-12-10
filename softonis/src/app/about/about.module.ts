import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { MessageComponent } from './news/message/message.component';
import { GeneralInfoComponent } from './news/general-info/general-info.component';
import { AcdComponent } from './news/acd/acd.component';
import { PersonalComponent } from './news/personal/personal.component';
import { InfoWeCollectComponent } from './news/info-we-collect/info-we-collect.component';
import { UseYourInfoComponent } from './news/use-your-info/use-your-info.component';
import { SharingYourInfoComponent } from './news/sharing-your-info/sharing-your-info.component';
import { ImgComponent } from './img/img.component';
import { MsgComponent } from './msg/msg.component';
import { AboutCrdComponent } from './about-crd/about-crd.component';

@NgModule({
  declarations: [AboutComponent, ProjectsComponent, NewsComponent, EventsComponent, MessageComponent, GeneralInfoComponent, AcdComponent, PersonalComponent, InfoWeCollectComponent, UseYourInfoComponent, SharingYourInfoComponent, ImgComponent, MsgComponent, AboutCrdComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
