import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/domain/movie.model';
import { IMovieService } from 'src/app/core/services/iMovie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  Movies: MovieModel[] = [];
  wait= false;
  filteredMovies: MovieModel[] = [];
  searchQuery: string = '';

  constructor(
    private MovieService: IMovieService
  ) { }

  ngOnInit() {
this.onLoad();
  }

  onLoad() {
    this.Movies = [];
    this.wait = true;
    this.MovieService.getAllMovies().subscribe(
      (data: MovieModel[]) => {
        this.wait = false;
        this.Movies = data;
        this.filteredMovies = [...this.Movies];
      }
    )

   
  }

  filterMovies(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredMovies = this.Movies.filter(movie => 
      movie.title.toLowerCase().includes(query)
    );
  }
}