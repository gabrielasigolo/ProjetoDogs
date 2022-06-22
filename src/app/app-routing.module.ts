import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsShowComponent } from './modules/dogs/dogs-show/dogs-show.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dogs'
  },
  {
    path: 'dogs',
    loadChildren: () => import('./modules/dogs/dogs.module').then(m => m.DogsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
