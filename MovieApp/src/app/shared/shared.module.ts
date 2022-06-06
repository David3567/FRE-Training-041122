import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderBarComponent } from 'src/app/shared/nav-header-bar/nav-header-bar.component';
import { NavSidebarComponent } from 'src/app/shared/nav-sidebar/nav-sidebar.component';
import { TextReductionPipe } from 'src/app/pipes/text-reduction.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  declarations: [
    NavHeaderBarComponent,
    NavSidebarComponent,
    TextReductionPipe,
  ],
  exports: [
    CommonModule,
    NavHeaderBarComponent,
    NavSidebarComponent,
    TextReductionPipe,
    RouterModule,

    FormsModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    YouTubePlayerModule,
    InfiniteScrollModule,
    MatProgressBarModule,
    NgbModule,
    MatChipsModule,
  ]
})

export class SharedModule { }
