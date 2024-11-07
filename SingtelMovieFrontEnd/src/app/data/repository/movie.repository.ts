import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {map} from 'rxjs/operators';
import { MovieModel } from "src/app/core/domain/movie.model";
import { MovieEntity } from "src/app/entity/movie.entity";
import { MovieRepositoryMapper } from "../mapper/movie-repository.mapper";
import { IMovieRepository } from "src/app/core/repositories/iMovie.repository";

@Injectable()
export class MovieRepository extends IMovieRepository{
    mapper = new MovieRepositoryMapper();

    constructor(
        private http: HttpClient
    ){
        super();
    }

    getAllMovies(): Observable<MovieModel[]> {
        return this.http
            .get<MovieEntity[]>('https://testdemo-athraaf7a2bjaxe6.southeastasia-01.azurewebsites.net/api/Movie/GetAll')
            .pipe(
                map(this.mapper.mapFromList)
            );
    }
}