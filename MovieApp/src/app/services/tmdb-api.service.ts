import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbAPIService {
  // 'https://api.themoviedb.org/3/search/movie?api_key=<<API KEY>>&query=up'
  base_url: string = 'https://api.themoviedb.org/3/search/movie?api_key='
  
  constructor() { }
}
