import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  subject$ = new Subject();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.subject$.subscribe((val) => {
    //   console.log('subscriber-1: ', val);
    // });
    // this.subject$.next('1');
    // this.subject$.next('2');
    // this.subject$.subscribe((val) => {
    //   console.log('subscriber-2: ', val);
    // });
    // this.subject$.next('4');
    // this.subject$.next('5');
    // this.subject$.subscribe((val) => {
    //   console.log('subscriber-3: ', val);
    // });
    // this.subject$.next('6');
    // this.subject$.next('7');
    // this.subject$.complete();
  }

  increase() {
    this.dataService.increase();
  }

  decrease() {
    this.dataService.decrease();
  }
}
