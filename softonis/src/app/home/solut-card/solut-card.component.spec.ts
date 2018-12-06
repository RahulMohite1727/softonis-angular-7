import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutCardComponent } from './solut-card.component';

describe('SolutCardComponent', () => {
  let component: SolutCardComponent;
  let fixture: ComponentFixture<SolutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
