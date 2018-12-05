import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumb2Component } from './jumb2.component';

describe('Jumb2Component', () => {
  let component: Jumb2Component;
  let fixture: ComponentFixture<Jumb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
