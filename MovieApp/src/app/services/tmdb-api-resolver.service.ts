import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import { TmdbAPIService } from '../services/tmdb-api.service';
import { Movie } from '../interfaces/movie';
import { catchError, delay, EMPTY, forkJoin, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

// Resolver has loading time of 5 seconds
export class TmdbAPIResolverService implements Resolve<any>{

    constructor(private router: Router, private movie: TmdbAPIService){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        console.log("Inside TmdbAPIResolverService");
        
        // let data = { movieTrailer: movieTrailer, movieId: movieId };
        return this.movie.getTrailer(route.params?.["id"])
            .pipe(
                delay(5000),
                catchError(() => {
                    this.router.navigate(["'/movielist'"]);
                    return EMPTY;
                })
            );
    }
}