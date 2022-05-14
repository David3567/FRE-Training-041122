import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWishlistComponent } from './show-wishlist.component';

describe('ShowWishlistComponent', () => {
  let component: ShowWishlistComponent;
  let fixture: ComponentFixture<ShowWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
