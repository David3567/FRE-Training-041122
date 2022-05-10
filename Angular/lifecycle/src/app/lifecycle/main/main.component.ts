import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  VERSION,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-main',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './main.component.html',
})
//   implements
//     OnDestroy,
//     OnChanges,
//     OnInit,
//     DoCheck,
//     AfterContentChecked,
//     AfterContentInit,
//     AfterViewChecked,
//     AfterViewInit
export class MainComponent {
  name = 'Angular ' + VERSION.major;

  message = 'Hello';
  content = 'Hello';
  hideChild!: boolean;
  interval: any;

  //   constructor() {
  //     console.log('AppComponent:Contructed');
  //   }

  //   ngOnChanges(): void {
  //     // @Input
  //     console.log('AppComponent:ngOnChanges');
  //   }

  //   ngOnInit(): void {
  //     console.log('AppComponent:ngOnInit');
  //   }

  //   ngDoCheck(): void {
  //     // this.interval = setInterval(() => console.log('hello'), 1000);
  //     console.log('AppComponent:DoCheck');
  //   }

  //   ngAfterContentInit(): void {
  //     console.log('AppComponent:ngAfterContentInit');
  //   }

  //   ngAfterContentChecked(): void {
  //     console.log('AppComponent:AfterContentChecked');
  //   }

  //   ngAfterViewInit(): void {
  //     console.log('AppComponent:AfterViewInit');
  //   }

  //   ngAfterViewChecked(): void {
  //     console.log('AppComponent:AfterViewChecked');
  //   }

  //   ngOnDestroy(): void {
  //     // clearInterval(this.interval);

  //     console.log('AppComponent:ngOnDestroy');
  //   }
}
