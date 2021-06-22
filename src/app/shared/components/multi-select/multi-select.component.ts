import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input()
  genres: string[] = [];
  selectedOptions: string[] = [];
  @Output() selection: EventEmitter<string[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set setGenres(val: string[]) {
    this.genres = val;
    this.selectedOptions = this.selectedOptions.filter(selectedOption => this.genres.includes(selectedOption));
    this.selectValChanged();
  }

  selectValChanged(): void {
    this.selection.emit(this.selectedOptions);
  }

}
