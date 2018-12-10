import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumb3Component } from './jumb3.component';

describe('Jumb3Component', () => {
  let component: Jumb3Component;
  let fixture: ComponentFixture<Jumb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
