import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SeriesService } from '../services/series.service';
import { Location } from '@angular/common';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent implements OnInit {
  $serieDetails: Observable<any>;
  constructor(private seriesService: SeriesService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.$serieDetails = this.seriesService.getSerieDetails(id).pipe(
      catchError((err) => {
        alert('Obsluga bledu'); // powinna byc zrobiona przez interceptor, aby obslugiwac jednoczesnie wszystkie requesty
        throw 'error in source. Details: ' + err;
      })
    );
  }

  back(): void {
    this.location.back();
  }

}
