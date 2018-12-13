import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContactusComponent } from './btn-contactus.component';

describe('BtnContactusComponent', () => {
  let component: BtnContactusComponent;
  let fixture: ComponentFixture<BtnContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
