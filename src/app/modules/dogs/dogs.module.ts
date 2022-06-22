import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsShowComponent } from './dogs-show/dogs-show.component';
import { DogsService } from './dogs.service';

@NgModule({
  declarations: [
    DogsShowComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DogsRoutingModule
  ],
  providers: [DogsService]
})
export class DogsModule { }
