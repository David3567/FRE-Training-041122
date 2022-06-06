import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpgradeComponent } from './user-upgrade.component';

describe('UserUpgradeComponent', () => {
  let component: UserUpgradeComponent;
  let fixture: ComponentFixture<UserUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
