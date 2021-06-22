import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightEqualizerDirective } from './directives/height-equalizer.directive';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

@NgModule({
  declarations: [HeightEqualizerDirective, MultiSelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeightEqualizerDirective,
    MultiSelectComponent
  ]
})
export class SharedModule { }
