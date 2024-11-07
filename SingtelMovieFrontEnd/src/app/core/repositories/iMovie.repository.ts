import { Observable } from "rxjs";
import { MovieModel } from "../domain/movie.model";

export abstract class IMovieRepository {
    abstract getAllMovies(): Observable<MovieModel[]>;
}