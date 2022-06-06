import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Token } from './token';
import { map } from 'rxjs/operators';
import { Movie, MovieTrailer, MovieDetail } from '../movies/movies.model';
import { MoviesService } from '../movies/movies.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private apiKey;

  constructor(private http: HttpClient, private moviesService: MoviesService) {
    this.apiKey = new Token();
  }

  //Get the list of popular for movies for Movie_List_Home_Page
  getMovies(page: number) {
    this.http
      .get<{ [key: string]: Movie }>(
        'https://api.themoviedb.org/3/movie/popular?',
        {
          params: new HttpParams().set('page', page),
        }
      )
      .pipe(
        map((response: any) => {
          const movieData: Movie[] = [];
          response.results.map((info: any) => {
            // keeping the id, title, overview/desc and thumnail/image
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
      .subscribe((data: any) => {
        //Fetch movies data to movies service
        this.moviesService.setMovie(data);
      });
  }

  //Get invidual movie with id/movie detail
  getMovieDetail(id: number) {
    return this.http
      .get<MovieDetail>('https://api.themoviedb.org/3/movie/' + id + '?')
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
      );
  }

  // Get list of video associated to movie
  getMovieTrailer(id: number) {
    return this.http
      .get<MovieTrailer>(`https://api.themoviedb.org/3/movie/${id}/videos?`)
      .pipe(
        map((data) => {
          const newResult = data.results.filter(
            (item) => item.name === 'Trailer' || item.type === 'Trailer'
          );
          // Get only first trailer
          return newResult[0];
        })
      )
      .subscribe((response) => {
        this.moviesService.setMovieTrailerId(response.key);
      });
  }
}
