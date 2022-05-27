import { TestBed } from '@angular/core/testing';

import { TodolistInterceptor } from './todolist.interceptor';

describe('TodolistInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TodolistInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TodolistInterceptor = TestBed.inject(TodolistInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
