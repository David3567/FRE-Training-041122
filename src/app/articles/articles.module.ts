import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { SingleArticleComponent } from './single-article/single-article.component';

@NgModule({
  declarations: [ArticlesComponent, SingleArticleComponent],
  imports: [CommonModule],
  exports: [ArticlesComponent],
})
export class ArticlesModule {}
