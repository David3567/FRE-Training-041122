import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedPokemonComponent } from './focused-pokemon.component';

describe('FocusedPokemonComponent', () => {
  let component: FocusedPokemonComponent;
  let fixture: ComponentFixture<FocusedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusedPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
