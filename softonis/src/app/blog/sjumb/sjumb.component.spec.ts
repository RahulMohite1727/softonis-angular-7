import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjumbComponent } from './sjumb.component';

describe('SjumbComponent', () => {
  let component: SjumbComponent;
  let fixture: ComponentFixture<SjumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
