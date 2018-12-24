import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { CardComponent } from './card.component';

import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ServicesComponent, CardComponent,],
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule, MatButtonModule, 
  ],
  exports :[ServicesComponent]
})
export class ServicesModule { }
