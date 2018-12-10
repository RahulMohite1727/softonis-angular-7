import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseYourInfoComponent } from './use-your-info.component';

describe('UseYourInfoComponent', () => {
  let component: UseYourInfoComponent;
  let fixture: ComponentFixture<UseYourInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseYourInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseYourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
