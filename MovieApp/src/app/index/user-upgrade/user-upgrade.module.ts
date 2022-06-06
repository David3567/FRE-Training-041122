import { NgModule } from '@angular/core';
import { UserUpgradeComponent } from './user-upgrade.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UserUpgradeComponent],
  imports: [
    MatTableModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserUpgradeComponent,
      },
    ]),
  ],
})
export class userUpgradeModule {}
