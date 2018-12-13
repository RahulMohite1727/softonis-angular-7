import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { FormsModule }   from '@angular/forms';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';





@NgModule({
  declarations: [ContactComponent, ContactinfoComponent, MapComponent, ContactformComponent],
  imports: [
    CommonModule,
    FormsModule


  ],
  exports:[ContactComponent]
})
export class ContactModule { }
