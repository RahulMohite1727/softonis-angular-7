import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumb1Component } from './jumb1.component';

describe('Jumb1Component', () => {
  let component: Jumb1Component;
  let fixture: ComponentFixture<Jumb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
