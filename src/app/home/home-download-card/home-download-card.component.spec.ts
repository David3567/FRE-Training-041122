import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDownloadCardComponent } from './home-download-card.component';

describe('HomeDownloadCardComponent', () => {
  let component: HomeDownloadCardComponent;
  let fixture: ComponentFixture<HomeDownloadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDownloadCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDownloadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
