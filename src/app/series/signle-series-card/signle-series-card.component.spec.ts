import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleSeriesCardComponent } from './signle-series-card.component';

describe('SignleSeriesCardComponent', () => {
  let component: SignleSeriesCardComponent;
  let fixture: ComponentFixture<SignleSeriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignleSeriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignleSeriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
