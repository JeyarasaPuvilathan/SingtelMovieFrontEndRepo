import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/domain/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MovieModel | undefined;

  constructor() { }

  ngOnInit() {
  }

}
