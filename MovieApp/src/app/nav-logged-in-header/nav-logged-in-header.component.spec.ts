import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoggedInHeaderComponent } from './nav-logged-in-header.component';

describe('NavLoggedInHeaderComponent', () => {
  let component: NavLoggedInHeaderComponent;
  let fixture: ComponentFixture<NavLoggedInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLoggedInHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoggedInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
