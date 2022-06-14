import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import { TmdbAPIService } from '../services/tmdb-api.service';
import { Movie } from '../interfaces/movie';
import { catchError, delay, EMPTY, forkJoin, Observable, of } from "rxjs";
import { AuthLocalStorageService } from "./auth-local-storage.service";

@Injectable({
    providedIn: 'root'
  })

// Resolver has loading time of 5 seconds
export class TmdbAPIResolverService implements Resolve<any>{
    api: string = '';

    constructor(private router: Router, private movie: TmdbAPIService, private readonly authService: AuthLocalStorageService){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        console.log("Inside TmdbAPIResolverService");
        const {JWToken, username, tmdb_key} = this.authService.userValue;

        if(JWToken && username && tmdb_key){
            this.api = tmdb_key;
            console.log('Resolverapi:',this.api);
        }
        
        // let data = { movieTrailer: movieTrailer, movieId: movieId };
        return this.movie.getTrailer(route.params?.["id"], this.api)
            .pipe(
                delay(5000),
                catchError(() => {
                    this.router.navigate(["'/movielist'"]);
                    return EMPTY;
                })
            );
    }
}