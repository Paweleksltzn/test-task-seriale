import { Component, Input, OnInit } from '@angular/core';
import { SingleSerie } from 'src/app/interfaces/SingleSerie';

@Component({
  selector: 'app-signle-series-card',
  templateUrl: './signle-series-card.component.html',
  styleUrls: ['./signle-series-card.component.scss']
})
export class SignleSeriesCardComponent implements OnInit {
  @Input()
  singleCard: SingleSerie;

  constructor() {}

  ngOnInit(): void {}

}
