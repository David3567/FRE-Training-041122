import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardComponent } from './slide-card.component';

describe('SlideCardComponent', () => {
  let component: SlideCardComponent;
  let fixture: ComponentFixture<SlideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
