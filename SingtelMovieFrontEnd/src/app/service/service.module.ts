import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovieRepository } from '../core/repositories/iMovie.repository';
import { MovieRepository } from '../data/repository/movie.repository';
import { IMovieService } from '../core/services/iMovie.service';
import { MovieService } from './movie.service';



@NgModule({
  providers: [
    {provide: IMovieRepository, useClass: MovieRepository},
    {provide: IMovieService, useClass: MovieService},
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
