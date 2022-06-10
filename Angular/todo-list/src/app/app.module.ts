import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistInterceptor } from './interceptors/todolist.interceptor';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx/todo.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './ngrx/todo.effect';
import { TodolistModule } from './todolist/todolist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'Todos Demo',
    }),
    TodolistModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TodolistInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
