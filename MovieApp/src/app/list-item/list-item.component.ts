import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class ListItemComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {}
  card: any[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'blue',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'black',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'red',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'green',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'blue',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'black',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'red',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'green',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'blue',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'black',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'red',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      descrption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      color: 'green',
    },
  ];
}
