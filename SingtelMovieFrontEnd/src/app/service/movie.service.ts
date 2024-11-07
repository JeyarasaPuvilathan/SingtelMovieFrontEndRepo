import { Injectable } from "@angular/core";
import { IMovieService } from "../core/services/iMovie.service";
import { MovieModel } from "../core/domain/movie.model";
import { Observable } from "rxjs";
import { IMovieRepository } from "../core/repositories/iMovie.repository";

@Injectable()
export class MovieService extends IMovieService{
    constructor(
        private MovieRepository: IMovieRepository
    ){
        super();
    }
    
    getAllMovies(): Observable<MovieModel[]> {
        return this.MovieRepository.getAllMovies();
    }
}