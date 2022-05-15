import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component'
import { RegisterComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'navheader', component: NavHeaderBarComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    LoginPageComponent,
    NavHeaderBarComponent,
    NavSidebarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
