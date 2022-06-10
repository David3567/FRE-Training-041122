import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TodolistService } from '../services/todolist.service';

import { TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TodolistComponent],
      providers: [TodolistService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
