import { SeriesService } from './../services/series.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { dateToShortString } from 'src/app/helpers/dateFormatter';
import { SingleSerie } from 'src/app/interfaces/SingleSerie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-series-main-view',
  templateUrl: './series-main-view.component.html',
  styleUrls: ['./series-main-view.component.scss']
})
export class SeriesMainViewComponent implements OnInit, OnDestroy {
  seriesDate = dateToShortString(new Date());
  seriesArr: SingleSerie[] = [];
  filteredSeriesArr: SingleSerie[] = [];
  genres: string[] = [];
  selectedOptions: string[] = [];
  getSeriesForDaySubscription: Subscription;
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.refreshSeries();
  }

  refreshSeries(): void {
    this.getSeriesForDaySubscription = this.seriesService.getSeriesForDay(new Date(this.seriesDate)).subscribe(res => {
      this.seriesArr = res;
      this.collectGenres();
      this.filterSeries();
    });
  }

  collectGenres(): void {
    const genresArr = [];
    this.seriesArr.forEach(singleSerie => {
      genresArr.push(...singleSerie.genres);
    });
    this.genres = [...new Set(genresArr)];
  }

  selectionChanged(selectedOptions: string[]): void {
    this.selectedOptions = selectedOptions;
    this.filterSeries();
  }

  filterSeries() {
    this.filteredSeriesArr = this.seriesArr;
    this.filteredSeriesArr = this.seriesArr.filter(serie => {
      let shouldBeDisplayed = true;
      this.selectedOptions.forEach(selectedOption => {
        if (!serie.genres.includes(selectedOption)) {
          shouldBeDisplayed = false;
        }
      });
      return shouldBeDisplayed;
    });
  }

  ngOnDestroy(): void {
    this.getSeriesForDaySubscription.unsubscribe();
  }

}
