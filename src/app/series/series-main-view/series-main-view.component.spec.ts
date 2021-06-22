import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMainViewComponent } from './series-main-view.component';

describe('SeriesMainViewComponent', () => {
  let component: SeriesMainViewComponent;
  let fixture: ComponentFixture<SeriesMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
