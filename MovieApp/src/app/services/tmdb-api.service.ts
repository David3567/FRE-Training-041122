import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TmdbAPIService {
  base_url: string = `https://api.themoviedb.org/3/search/movie?api_key=${environment.API_KEY}&query=` 
  poster_base_url: string = 'https://image.tmdb.org/t/p/original'
  private movies: any = []
  private moviesSubj$: any = new Subject()
  movies$: any = this.moviesSubj$.asObservable()
  
  constructor(private http: HttpClient) { }

  getMovies(movieName: string) {
    console.log(movieName)
    this.http.get([this.base_url, movieName].join('/')).pipe(
      map((moviesObj: any) => {
        const tempMovieList: any = moviesObj.results.map((movieData: any) => {
          return {
            adult: movieData.adult,
            backdrop_path: movieData.backdrop_path,
            genre_ids: movieData.genre_ids,
            id: movieData.id,
            original_language: movieData.original_language,
            original_title: movieData.original_title,
            overview: movieData.overview,
            popularity: movieData.popularity,
            poster_path: movieData.poster_path,
            poster_url: this.poster_base_url+movieData.poster_path,
            release_date: movieData.release_date,
            title: movieData.title,
            video: movieData.video,
            vote_average: movieData.vote_average,
            vote_count: movieData.vote_count
          }
        })
        return tempMovieList
      }),
      tap((movieList: any) => {
        this.movies = [...movieList]
        this.moviesSubj$.next(this.movies)
      })
    ).subscribe()
  }
  
  getMoviesPosters() {

  }

}
