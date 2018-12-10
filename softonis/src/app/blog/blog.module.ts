import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Jumb1Component } from './jumb1/jumb1.component';
import { Jumb2Component } from './jumb2/jumb2.component';
import { Jumb3Component } from './jumb3/jumb3.component';
import { Jumb4Component } from './jumb4/jumb4.component';
import { Jumb5Component } from './jumb5/jumb5.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SjumbComponent } from './sjumb/sjumb.component';

@NgModule({
  declarations: [BlogComponent, Jumb1Component, Jumb2Component, Jumb3Component, Jumb4Component, Jumb5Component, PaginationComponent, SjumbComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
