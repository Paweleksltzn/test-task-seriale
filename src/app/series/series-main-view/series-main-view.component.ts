import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';
import { dateToShortString } from 'src/app/helpers/dateFormatter';

@Component({
  selector: 'app-series-main-view',
  templateUrl: './series-main-view.component.html',
  styleUrls: ['./series-main-view.component.scss']
})
export class SeriesMainViewComponent implements OnInit {
  seriesDate = dateToShortString(new Date());
  seriesArr: any[] = [];
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.refreshSeries();
  }

  refreshSeries(): void {
    this.seriesService.getSeriesForDay(new Date(this.seriesDate)).subscribe(res => {
      this.seriesArr = res;
      console.log(this.seriesArr)
    });
  }

}
