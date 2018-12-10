import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumb5Component } from './jumb5.component';

describe('Jumb5Component', () => {
  let component: Jumb5Component;
  let fixture: ComponentFixture<Jumb5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumb5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
