import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/interfaces/user.interface';
import { AuthLocalStorageService } from 'src/app/services/auth-local-storage.service';
import { TmdbAPIService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-user-upgrade',
  templateUrl: './user-upgrade.component.html',
  styleUrls: ['./user-upgrade.component.sass'],
})
export class UserUpgradeComponent implements OnInit {
  displayedColumns: string[] = [
    'perks',
    'userCheck',
    'superuserCheck',
    'adminCheck',
  ];
  dataSource = [
    {
      perk: "Instant access to the movie with Merge Conflict's query tool ®",
      userCheck: '\u2713',
      superuserCheck: '\u2713',
      adminCheck: '\u2713',
    },
    {
      perk: 'Inmediate access to future beta tests on the platform',
      userCheck: '\u2713',
      superuserCheck: '\u2713',
      adminCheck: '\u2713',
    },
    {
      perk: 'Full access to movie details, including: trailer, ratings, backdrops and many others',
      userCheck: '☓',
      superuserCheck: '\u2713',
      adminCheck: '\u2713',
    },
    {
      perk: 'An exclusive Jojo Picture',
      userCheck: '☓',
      superuserCheck: '☓',
      adminCheck: '\u2713',
    },
    {
      perk: '',
      userCheck: 'User',
      superuserCheck: 'Superuser',
      adminCheck: 'Admin',
    },
  ];
  constructor(
    private movieAPI: TmdbAPIService,
    private auth: AuthLocalStorageService
  ) {}

  ngOnInit(): void {}

  switchrole(selectedRole: keyof typeof UserRole): any {
    // console.log({ role: UserRole[selectedRole] });
    this.auth.upgradeRoleAuth({ role: UserRole[selectedRole] }).subscribe();
  }
}
