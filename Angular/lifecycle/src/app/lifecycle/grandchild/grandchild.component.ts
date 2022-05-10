import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Customer } from 'src/app/interface/customer.model';

@Component({
  selector: 'app-grand-child',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './grandchild.component.html',
})
export class GrandChildComponent
  implements
    OnDestroy,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  @Input('newCustomer') customer: Customer | undefined;

  constructor() {
    console.log('hello');
    console.log('    GrandChildComponent:Contructed');
  }

  ngOnChanges(): void {
    console.log('    GrandChildComponent:ngOnChanges');
  }

  ngOnInit(): void {
    console.log('    GrandChildComponent:ngOnInit');
  }

  ngDoCheck(): void {
    console.log('    GrandChildComponent:DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('    GrandChildComponent:ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('    GrandChildComponent:AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('    GrandChildComponent:AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('    GrandChildComponent:AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('    GrandChildComponent:ngOnDestroy');
  }
}
