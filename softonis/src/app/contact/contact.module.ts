import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { MapComponent } from './map/map.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [ContactComponent, ContactinfoComponent, MapComponent, ContactformComponent],
  imports: [
    CommonModule,
    FormsModule


  ],
  exports:[ContactComponent]
})
export class ContactModule { }
