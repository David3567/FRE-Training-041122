import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, Subject, tap, delay } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TmdbAPIService {
  private base_url: string = `https://api.themoviedb.org/3/search/movie?api_key=${environment.API_KEY}&query=` 
  private poster_base_url: string = 'https://image.tmdb.org/t/p/original'
  private populars_base_url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=` // add page
  private moviesSubj$: any = new Subject();
  private movieTrailersSubj$: any = new Subject();
  private movieDetailsSubj$: any = new Subject();

  private movies: any = [];
  private movieTrailers: any = [];
  private movieDetails: any = {};

  private popularQueryPageSbj$: any = new Subject()
  private searchQueryPageSbj$: any = new Subject()
  
  popularQueryPage$: any = this.popularQueryPageSbj$.asObservable()
  searchQueryPage$: any = this.searchQueryPageSbj$.asObservable()

  movies$: any = this.moviesSubj$.asObservable()
  movieTrailers$: any = this.movieTrailersSubj$.asObservable()
  movieDetails$: any = this.movieDetailsSubj$.asObservable()
  
  constructor(private http: HttpClient) { }

  queryMovies(popular: boolean = false, pageNum: number = 1, movieName?: string, concat: boolean = false) {
    const endpoint = popular ? [this.populars_base_url, pageNum].join('') : [this.base_url, movieName].join('/') + `&page=${pageNum}`
    if (popular) {
      this.popularQueryPageSbj$.next(pageNum)
    } else {
      this.searchQueryPageSbj$.next(pageNum)
    }
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
        if (concat) {
          this.movies = [...this.movies, ...movieList]
          this.moviesSubj$.next(this.movies)
  
        } else {
          this.movies = [...movieList]
          this.moviesSubj$.next(this.movies)
  
        }
      })
    ).subscribe()

  }

  //Changes made for Resolver
  getTrailer(id: string){
    const movieVideosURL: string = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${environment.API_KEY}&language=en-US`
    return this.http.get(movieVideosURL).pipe(
      map((videosObj: any) => {
      const movieTrailer: any = videosObj.results.map((videosData: any) => {
          if (videosData.type === 'Trailer') {
          return {
              iso_639_1: videosData.iso_639_1,
              iso_3166_1: videosData.iso_3166_1,
              name: videosData.name,
              key: videosData.key,
              site: videosData.site,
              size: videosData.size,
              type: videosData.type,
              official: videosData.official,
              published_at: videosData.published_at,
              id: videosData.id
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
    )
  }

    //Changes made for Resolver
    getMovieByID(id: string) {
      const endpoint: string = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.API_KEY}&language=en-US`
      return this.http.get(endpoint).pipe(
        tap((movieDetails: any) => {
          console.log(movieDetails)
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
      )
    }
}
