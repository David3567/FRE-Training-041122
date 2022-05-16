import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Token } from './token';
import { map } from 'rxjs/operators';
import { MoiveDetail, Movie } from '../movies/movies.model';
import { MoviesService } from '../movies/movies.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private apiKey;
  constructor(private http: HttpClient, private moviesService: MoviesService) {
    this.apiKey = new Token();
  }
  /**
   * Later implement HTTP Interceptor to attach API_KEY
   */

  //Get the list of popular for movies for Movie_List_Home_Page
  getMovies() {
    this.http
      .get<{ [key: string]: Movie }>(
        'https://api.themoviedb.org/3/movie/popular?',
        {
          params: new HttpParams().set('api_key', this.apiKey.apiKey),
        }
      )
      .pipe(
        map((response: any) => {
          const movieData: Movie[] = [];
          response.results.map((info: any) => {
            //Just keeping the id, title, overview/desc and thumnail/image
            movieData.push({
              id: info.id,
              title: info.title,
              overview: info.overview,
              image: 'https://image.tmdb.org/t/p/w780' + info.poster_path,
            });
          });
          return movieData;
        })
      )
      .subscribe((data) => {
        //Here just getting the http data, fetching to and from compnents in MovieService
        this.moviesService.setMovie(data);
      });
  }

  //Get invidual movie with id
  getMoiveDetail(id: number) {
    this.http
      .get('https://api.themoviedb.org/3/movie/' + id + '?', {
        params: new HttpParams().set('api_key', this.apiKey.apiKey),
      })
      .pipe(
        map((response: any) => {
          return {
            id: response.id,
            title: response.title,
            overview: response.overview,
            rating: response.vote_average,
            releaseDate: response.release_date,
            homepage: response.homepage,
            genres: response.genres.map((genre: any) => genre.name),
            image: 'https://image.tmdb.org/t/p/w780' + response.poster_path,
          };
        })
      )
      .subscribe((data: MoiveDetail) => {
        this.moviesService.setMovieDetail(data);
      });
  }
}
