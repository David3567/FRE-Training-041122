import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TodolistService } from './todolist.service';
import { of } from 'rxjs';

describe('TodolistService', () => {
  let service: TodolistService;
  let httpTestingController: HttpTestingController;

  const todolist = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodolistService],
    });
    service = TestBed.inject(TodolistService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get todos from getTodos method', () => {
    spyOn(service, 'getTodos').withArgs().and.returnValue(of(todolist));

    service.getTodos().subscribe((data) => {
      expect(data).toEqual(todolist);
    });
    expect(service.getTodos).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
