import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';
import { dateToShortString } from 'src/app/helpers/dateFormatter';
import { SingleSerie } from 'src/app/interfaces/SingleSerie';

@Component({
  selector: 'app-series-main-view',
  templateUrl: './series-main-view.component.html',
  styleUrls: ['./series-main-view.component.scss']
})
export class SeriesMainViewComponent implements OnInit {
  seriesDate = dateToShortString(new Date());
  seriesArr: SingleSerie[] = [];
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.refreshSeries();
  }

  refreshSeries(): void {
    this.seriesService.getSeriesForDay(new Date(this.seriesDate)).subscribe(res => {
      this.seriesArr = res;
    });
  }

}
