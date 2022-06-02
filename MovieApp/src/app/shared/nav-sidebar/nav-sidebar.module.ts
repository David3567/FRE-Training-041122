import { NgModule } from '@angular/core';
import { NavSidebarComponent } from './nav-sidebar.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    NavSidebarComponent
  ],
  imports: [
    SharedModule,
    // CommonModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatListModule,
    // MatIconModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: NavSidebarComponent
    // }
    // ])
  ]
})
export class NavSidebarModule { }
