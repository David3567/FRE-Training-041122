import { HttpClient } from '@angular/common/http';
import { map, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbAPIService {
  private base_url: string = `https://api.themoviedb.org/3/search/movie?api_key=${environment.API_KEY}&query=` 
  private poster_base_url: string = 'https://image.tmdb.org/t/p/original'
  private populars_base_url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=1`
  private movies: any = []
  private moviesSubj$: any = new Subject()
  movies$: any = this.moviesSubj$.asObservable()
  
  constructor(private http: HttpClient) { }

  queryMovies(popular: boolean = false, movieName?: string) {
    const endpoint = popular ? this.populars_base_url : [this.base_url, movieName].join('/')
    this.http.get(endpoint).pipe(
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
            vote_count: movieData.vote_count,
            showDetails: false
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
  
  getMovieTrailer(id: string) {
    this.queryMovies(false, )
  }
}
