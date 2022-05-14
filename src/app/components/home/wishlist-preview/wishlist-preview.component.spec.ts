import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistPreviewComponent } from './wishlist-preview.component';

describe('WishlistPreviewComponent', () => {
  let component: WishlistPreviewComponent;
  let fixture: ComponentFixture<WishlistPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
