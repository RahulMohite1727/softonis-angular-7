import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingYourInfoComponent } from './sharing-your-info.component';

describe('SharingYourInfoComponent', () => {
  let component: SharingYourInfoComponent;
  let fixture: ComponentFixture<SharingYourInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingYourInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingYourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
