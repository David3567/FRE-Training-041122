import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { from, fromEvent, interval, Observable, of, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit, OnDestroy {
  name = '';
  obsByof$ = of([1, 2, 3, 4]);
  obsByfromEvent$!: Observable<any>;
  subscription$ = new Subscription();

  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.subscription$ = interval(200)
      .pipe(take(12))
      .subscribe((num) => console.log(num));

    // this.obsByfromEvent$ = fromEvent(this.inputbox.nativeElement, 'keyup').pipe(
    //   tap((keyevent: any) => {
    //     console.log(keyevent.code);
    //   }),
    //   map((num) => {
    //     return 3;
    //   })
    // );

    // this.obsByfromEvent$.subscribe((evt) => {
    //   console.log(evt);
    // });

    // this.obsByof$.subscribe((num) => {
    //   console.log(num);
    // });
    // this.obsByfrom$.subscribe((num) => {
    //   console.log(num);
    // });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
