import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import { TmdbAPIService } from '../services/tmdb-api.service';
import { Movie } from '../interfaces/movie';
import { catchError, delay, EMPTY, forkJoin, Observable, of } from "rxjs";
import { AuthLocalStorageService } from "./auth-local-storage.service";

@Injectable({
    providedIn: 'root'
  })

// Resolver has no loading time
export class TmdbIDResolverService implements Resolve<any>{
    api: string = '';

    constructor(private router: Router, private movie: TmdbAPIService, private readonly authService: AuthLocalStorageService){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const {JWToken, username, tmdb_key} = this.authService.userValue;

        if(JWToken && username && tmdb_key){
            this.api = tmdb_key;
            console.log('ResolverIDapi:',this.api);
        }
        return this.movie.getMovieByID(route.params?.["id"], this.api);
    }
}