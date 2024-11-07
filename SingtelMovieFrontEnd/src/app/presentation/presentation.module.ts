import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-list/movie-item/movie-item.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MovieListComponent,
    MovieItemComponent
  ]
})
export class PresentationModule { }
