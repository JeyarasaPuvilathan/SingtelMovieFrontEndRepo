import { Observable } from "rxjs";
import { MovieModel } from "../domain/movie.model";

export abstract class IMovieService {
    abstract getAllMovies(): Observable<MovieModel[]>;
}