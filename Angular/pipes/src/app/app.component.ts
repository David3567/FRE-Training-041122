import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title =
    'laboriosam mollitia et enim quasi adipisci quia provident illum, laboriosam mollitia et enim quasi adipisci quia provident illum';

  todo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
    name: 'Jojo',
  };
  todoKey = Object.keys(this.todo);

  limited = false;

  toggle() {
    this.limited = !this.limited;
  }

  orderfn() {
    return 0;
  }
}
