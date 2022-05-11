import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { GrandChildComponent } from './lifecycle/grandchild/grandchild.component';
import { MainComponent } from './lifecycle/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  //   { path: 'child', component: ChildComponent },
  {
    path: 'grand',
    component: GrandChildComponent,
    children: [{ path: 'child', component: ChildComponent }],
  },

  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GrandChildComponent,
    ChildComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
