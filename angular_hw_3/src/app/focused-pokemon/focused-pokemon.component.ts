import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-focused-pokemon',
  templateUrl: './focused-pokemon.component.html',
  styleUrls: ['./focused-pokemon.component.sass'],
})
export class FocusedPokemonComponent implements OnInit {
  pokeList: any[] = [];
  pokeParam?: any;
  pokeParamBool?: boolean;

  constructor(
    private router: Router,
    private actvRoute: ActivatedRoute,
    private pokeAPI: PokemonService
  ) {
    this.pokeParam = this.actvRoute.snapshot.params['pokemon'];
    console.log(this.pokeParam);
  }

  ngOnInit(): void {
    console.log('FocusedPokemonComponent');
    this.pokeAPI.getPokemon(true, this.pokeParam);
    this.pokeAPI.pokeObs$.subscribe((pokeData: any) => {
      this.pokeList = [...pokeData];
    });
  }
}
