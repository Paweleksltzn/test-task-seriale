import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signle-series-card',
  templateUrl: './signle-series-card.component.html',
  styleUrls: ['./signle-series-card.component.scss']
})
export class SignleSeriesCardComponent implements OnInit {
  @Input()
  singleCard: any;

  constructor() { }

  ngOnInit(): void {
  }

}
