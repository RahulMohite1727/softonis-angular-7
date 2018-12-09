import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCrdComponent } from './about-crd.component';

describe('AboutCrdComponent', () => {
  let component: AboutCrdComponent;
  let fixture: ComponentFixture<AboutCrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
