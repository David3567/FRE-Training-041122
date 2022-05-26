import { HttpClient } from '@angular/common/http';
import { filter, map, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbAPIService {
  private base_url: string = `https://api.themoviedb.org/3/search/movie?api_key=${environment.API_KEY}&query=` 
  private poster_base_url: string = 'https://image.tmdb.org/t/p/original'
  private populars_base_url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=1`
  
  private moviesSubj$: any = new Subject()
  private movieTrailersSubj$: any = new Subject()
  private movieDetailsSubj$: any = new Subject()

  private movies: any = []
  private movieTrailers: any = []
  private movieDetails: any = {}

  movies$: any = this.moviesSubj$.asObservable()
  movieTrailers$: any = this.movieTrailersSubj$.asObservable()
  movieDetails$: any = this.movieDetailsSubj$.asObservable()
  
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
    console.log('getMovieTrailer')
    const movieVideosURL: string = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${environment.API_KEY}&language=en-US`
    this.http.get(movieVideosURL).pipe(
      map((videosObj: any) => {
        const movieTrailer: any = videosObj.results.map((videosData: any) => {
          if (videosData.type === 'Trailer') {
          // if (videosData.name === 'Official Trailer') {
            return {
              // iso_639_1: videosData.iso_639_1,
              // iso_3166_1: videosData.iso_3166_1,
              // name: videosData.name,
              key: videosData.key,
              // site: videosData.site,
              // size: videosData.size,
              // type: videosData.type,
              // official: videosData.official,
              // published_at: videosData.published_at,
              // id: videosData.id
            }
          } else {
            return null
          }
        }).filter((ele:any) => ele)
        
        return movieTrailer
      }),
      tap((movieTrailer: any) => {
        this.movieTrailers = [...movieTrailer]
        this.movieTrailersSubj$.next(this.movieTrailers)
      })
    ).subscribe()
  }

  getMovieByID(id: string) {
    console.log('getMovieByID')
    const endpoint: string = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.API_KEY}&language=en-US`
    console.log(endpoint)
    this.http.get(endpoint).pipe(
      tap((movieDetails: any) => {
        this.movieDetails = {
          adult: movieDetails.adult,
          backdrop_path: movieDetails.backdrop_path,
          genre_ids: movieDetails.genre_ids,
          id: movieDetails.id,
          original_language: movieDetails.original_language,
          original_title: movieDetails.original_title,
          overview: movieDetails.overview,
          popularity: movieDetails.popularity,
          poster_path: movieDetails.poster_path,
          poster_url: this.poster_base_url+movieDetails.poster_path,
          release_date: movieDetails.release_date,
          title: movieDetails.title,
          video: movieDetails.video,
          vote_average: movieDetails.vote_average,
          vote_count: movieDetails.vote_count,
          showDetails: false
        }
        this.movieDetailsSubj$.next(this.movieDetails)
      })
    ).subscribe()
  }

}
