import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import { TmdbAPIService } from '../services/tmdb-api.service';
import { Movie } from '../interfaces/movie';
import { catchError, delay, EMPTY, forkJoin, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

// Resolver has no loading time
export class TmdbIDResolverService implements Resolve<any>{

    constructor(private router: Router, private movie: TmdbAPIService){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.movie.getMovieByID(route.params?.["id"]);
    }
}