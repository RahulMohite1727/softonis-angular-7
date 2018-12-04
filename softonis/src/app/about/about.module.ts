import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [AboutComponent, ProjectsComponent, NewsComponent, EventsComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
