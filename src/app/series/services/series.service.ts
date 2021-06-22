import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dateToShortString } from 'src/app/helpers/dateFormatter';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {}

  getSeriesForDay(seriesDate: Date = new Date()): Observable<any> {
    const queryParams = {
      params: {
        date: dateToShortString(seriesDate),
        country: 'US'
      },
    };
    return this.http.get('https://api.tvmaze.com/schedule/web', queryParams);
  }
}
