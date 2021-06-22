import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightEqualizerDirective } from './directives/height-equalizer.directive';

@NgModule({
  declarations: [HeightEqualizerDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HeightEqualizerDirective
  ]
})
export class SharedModule { }
