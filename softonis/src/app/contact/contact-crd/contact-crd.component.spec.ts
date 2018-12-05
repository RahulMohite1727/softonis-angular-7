import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCrdComponent } from './contact-crd.component';

describe('ContactCrdComponent', () => {
  let component: ContactCrdComponent;
  let fixture: ComponentFixture<ContactCrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
