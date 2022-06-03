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

  private movies: any = [];
  private movieTrailers: any = [];
 
  private popularQueryPageSbj$: any = new Subject()
  private searchQueryPageSbj$: any = new Subject()
  
  popularQueryPage$: any = this.popularQueryPageSbj$.asObservable()
  searchQueryPage$: any = this.searchQueryPageSbj$.asObservable()

  movies$: any = this.moviesSubj$.asObservable()
  movieTrailers$: any = this.movieTrailersSubj$.asObservable()
 
  movieImg!: any;
  
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
              key: videosData.key,
              id: videosData.id
          }
          } else {
          return null
          }
      }).filter((ele:any) => ele)
      console.log(movieTrailer)
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
      return this.http.get(endpoint)
    }

    getMovieImage(path: string): string {
      return [this.poster_base_url, path].join('')
    }
}
