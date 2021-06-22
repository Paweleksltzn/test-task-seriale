import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { SeriesMainViewComponent } from './series-main-view/series-main-view.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesMainViewComponent
  },
  {
    path: 'details/:id',
    component: SerieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
