import { Mapper } from "src/app/core/base/mapper";
import { MovieModel } from "src/app/core/domain/movie.model";
import { MovieEntity } from "src/app/entity/movie.entity";

export class MovieRepositoryMapper implements Mapper<MovieEntity, MovieModel> {
    mapToList(param: MovieModel[]): MovieEntity[] {
        let movieEntities: MovieEntity[] = [];

        param.forEach(movieModel => {
            movieEntities.push({
                id: 0,
                title: movieModel.title,
                releaseYear: movieModel.releaseYear,
                imagePath: movieModel.imagePath
            })
        });

        return movieEntities;
    }

    mapFromList(param: MovieEntity[]): MovieModel[] {
        let movieModels: MovieModel[] = [];

        param.forEach(movieEntity => {
            movieModels.push(
                {
                    title: movieEntity.title,
                    releaseYear: movieEntity.releaseYear,
                    imagePath: movieEntity.imagePath
                }
            )
        });

        return movieModels;
    }

    mapFrom(param: MovieEntity): MovieModel {
        return {
            title: param.title,
            releaseYear: param.releaseYear,
            imagePath: param.imagePath
        };
    }    
    
    mapTo(param: MovieModel): MovieEntity {
        return {
            id: 0,
            title: param.title,
            releaseYear: param.releaseYear,
            imagePath: param.imagePath
        };
    }
}