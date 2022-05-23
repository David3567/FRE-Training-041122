import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.sass'],
})
export class MoviePageComponent implements OnInit {
  posts: any;
  readonly Root_url =
    'https://api.themoviedb.org/3/movie/{movie_id}/alternative_titles?api_key=<<74ca95f66471efa0a5348b425e9a6462>>';
  constructor(private http: HttpClient) {}
  getPosts() {
    // let params = new HttpParams().set();
    this.posts = this.http.get(this.Root_url + 'posts');
  }

  ngOnInit(): void {}
}
