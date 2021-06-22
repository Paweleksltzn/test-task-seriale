import { SeriesRoutingModule } from './series-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesMainViewComponent } from './series-main-view/series-main-view.component';
import { SignleSeriesCardComponent } from './signle-series-card/signle-series-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SeriesMainViewComponent, SignleSeriesCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    SeriesRoutingModule
  ],
  exports: [
    SeriesMainViewComponent,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
