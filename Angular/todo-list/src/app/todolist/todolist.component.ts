import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodolistService } from '../services/todolist.service';
import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todolist: Todo[] = [];
  title = '';
  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };
  inputbox$!: Observable<any>;
  @ViewChild('inputTodo', { static: true }) inputTodo!: ElementRef;

  constructor(private readonly todoListService: TodolistService) {}

  ngOnInit(): void {
    this.todoListService.getTodos().subscribe((todolist: Todo[]) => {
      this.todolist = todolist.reverse();
    });

    this.inputbox$ = fromEvent(this.inputTodo.nativeElement, 'keyup').pipe(
      tap((evt) => {
        if (evt.code === 'Enter') {
          this.todoListService.addTodo(this.todo).subscribe((todo: Todo) => {
            this.todolist = [todo, ...this.todolist];
          });
          this.todo.title = '';
        }
      })
    );
    this.inputbox$.subscribe();
  }

  //   addTodo() {
  //     this.todoListService.addTodo(this.todo).subscribe((todo: Todo) => {
  //       this.todolist = [todo, ...this.todolist];
  //     });
  //     this.todo.title = '';
  //   }

  deleteTodo(id: string) {
    this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
    this.todoListService.deleteTodo(+id).subscribe();
  }
}
