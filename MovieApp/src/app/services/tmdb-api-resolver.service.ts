import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import { TmdbAPIService } from '../services/tmdb-api.service';
import { Movie } from '../interfaces/movie';
import { catchError, delay, EMPTY, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

// Resolver has loading time of 4 seconds
export class TmdbAPIResolverService implements Resolve<Movie[]>{

    constructor(private router: Router, private movie: TmdbAPIService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
        console.log("Inside TmdbAPIResolverService");
        return this.movie.getTrailer(route.params?.["id"])
            .pipe(
                delay(4000),
                catchError(() => {
                    this.router.navigate(["'/movielist'"]);
                    return EMPTY;
                })
            );
    }
}