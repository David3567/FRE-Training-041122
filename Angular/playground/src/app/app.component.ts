import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  liked = 100;
  disliked = 25;

  status = Status.UNSELECT;

  onLike() {
    if (this.status === Status.UNSELECT) {
      this.liked++;
      this.status = Status.LIKE;
    } else if (this.status === Status.LIKE) {
      this.liked--;
      this.status = Status.UNSELECT;
    } else if (this.status === Status.DISLIKE) {
      this.liked++;
      this.disliked--;
      this.status = Status.LIKE;
    }
  }

  onDislike() {
    if (this.status === Status.UNSELECT) {
      this.disliked++;
      this.status = Status.DISLIKE;
    } else if (this.status === Status.DISLIKE) {
      this.disliked--;
      this.status = Status.UNSELECT;
    } else {
      this.disliked++;
      this.liked--;
      this.status = Status.DISLIKE;
    }
  }
}

export enum Status {
  LIKE = 'like',
  DISLIKE = 'dislike',
  UNSELECT = 'unselect',
}
