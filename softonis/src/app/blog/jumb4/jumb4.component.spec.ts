import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumb4Component } from './jumb4.component';

describe('Jumb4Component', () => {
  let component: Jumb4Component;
  let fixture: ComponentFixture<Jumb4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumb4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
