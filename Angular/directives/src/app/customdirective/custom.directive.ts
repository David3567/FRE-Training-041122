import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class CustomDirective implements OnInit {
  @Input() defaultColor = '';
  @Input('appMydirective') highlightColor = '';

  @HostBinding('name') name = '';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.name = '';
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.name = '5px solid blue';
    this.highlight('');
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
