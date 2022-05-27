import { TestBed } from '@angular/core/testing';

import { TodolistGuard } from './todolist.guard';

describe('TodolistGuard', () => {
  let guard: TodolistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodolistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
