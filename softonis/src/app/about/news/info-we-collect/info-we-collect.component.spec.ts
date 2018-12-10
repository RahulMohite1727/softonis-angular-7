import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWeCollectComponent } from './info-we-collect.component';

describe('InfoWeCollectComponent', () => {
  let component: InfoWeCollectComponent;
  let fixture: ComponentFixture<InfoWeCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWeCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWeCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
