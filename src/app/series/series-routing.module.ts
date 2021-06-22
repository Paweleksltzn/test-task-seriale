import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesMainViewComponent } from './series-main-view/series-main-view.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesMainViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
