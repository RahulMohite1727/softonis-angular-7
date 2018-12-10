import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFrmComponent } from './subscribe-frm.component';

describe('SubscribeFrmComponent', () => {
  let component: SubscribeFrmComponent;
  let fixture: ComponentFixture<SubscribeFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
