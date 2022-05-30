import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage-service';
import { MovieDetail } from '../movies.model';
import { MoviesService } from '../movies.service';

@Injectable({ providedIn: 'root' })
export class MovieDetailsResolve implements Resolve<MovieDetail> {
  //   movieDetail!: MovieDetail;
  constructor(
    private dataStorageService: DataStorageService,
    private movieService: MoviesService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieDetail> | Promise<MovieDetail> | MovieDetail {
    const id = route.params['id'];
    return <any>this.dataStorageService.getMovieDetail(id);
  }
}
