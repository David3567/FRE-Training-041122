import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss'],
})
export class SingleArticleComponent implements OnInit {
  @Input('single-article') article!: Article;
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.buttonClicked.emit(this.article.color);
  }
}
