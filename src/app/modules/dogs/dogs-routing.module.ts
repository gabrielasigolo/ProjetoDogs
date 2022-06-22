import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsShowComponent } from './dogs-show/dogs-show.component';

const routes: Routes = [
  {
    path: '',
    component: DogsShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
