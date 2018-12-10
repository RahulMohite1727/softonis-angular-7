import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
<<<<<<< HEAD
import { ContactCrdComponent } from './contact-crd/contact-crd.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { NgModule } from '@angular/core';


=======
>>>>>>> aa93f7cabe7d6e75ac189c06abd1a18262be9abe

@NgModule({
  declarations: [ContactComponent, ContactInfoComponent, ContactCrdComponent, ContactMapComponent, ContactFormComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
