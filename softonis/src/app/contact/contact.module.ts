import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactCrdComponent } from './contact-crd/contact-crd.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [ContactComponent, ContactInfoComponent, ContactCrdComponent, ContactMapComponent, ContactFormComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
