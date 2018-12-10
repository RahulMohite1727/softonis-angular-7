import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLearnmoreComponent } from './btn-learnmore.component';

describe('BtnLearnmoreComponent', () => {
  let component: BtnLearnmoreComponent;
  let fixture: ComponentFixture<BtnLearnmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLearnmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLearnmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
