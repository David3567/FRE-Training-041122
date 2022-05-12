import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.scss'],
})
export class TestdataComponent implements OnInit {
  counter = 0;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.subject$.subscribe((num: any) => {
      this.counter = num;
    });
  }
}
