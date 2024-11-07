import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/domain/movie.model';
import { IMovieService } from 'src/app/core/services/iMovie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  Movies: MovieModel[] | undefined;
  wait= false;

  constructor(
    private MovieService: IMovieService
  ) { }

  ngOnInit() {

  }

  onLoad() {
    this.Movies = [];
    this.wait = true;
    this.MovieService.getAllMovies().subscribe(
      (data: MovieModel[]) => {
        this.wait = false;
        this.Movies = data;
      }
    )
  }
}