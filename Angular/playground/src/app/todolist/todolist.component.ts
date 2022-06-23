import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  counter!: number;
  newtodo = {
    title: '',
    isComplete: false,
  };
  tasks: any = [];

  addTask() {
    this.tasks = [...this.tasks, this.newtodo];
    this.newtodo.title = '';
    this.handleCounter();
  }

  updateIsComplete(task: any) {
    task.isComplete = !task.isComplete;
    this.handleCounter();
  }

  private handleCounter() {
    this.counter = this.tasks.filter((task: any) => !task.isComplete).length;
  }
}
