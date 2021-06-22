import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dateToShortString } from 'src/app/helpers/dateFormatter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SingleSerie } from 'src/app/interfaces/SingleSerie';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {}

  getSeriesForDay(seriesDate: Date = new Date()): Observable<SingleSerie[]> {
    const queryParams = {
      params: {
        date: dateToShortString(seriesDate),
        country: 'US'
      },
    };
    return this.http.get('https://api.tvmaze.com/schedule/web', queryParams).pipe(map((res: any) => res.map(obj => {
      return {
        ...obj._embedded.show,
        season: obj.season,
        airtime: obj.airtime
      };
    })));
  }

  getSerieDetails(serieId: string): Observable<any> {
    return this.http.get(`https://api.tvmaze.com/shows/${serieId}`);
  }

}
