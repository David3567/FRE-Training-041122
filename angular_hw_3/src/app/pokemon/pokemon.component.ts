import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass'],
})
export class PokemonComponent implements OnInit {
  starterPokemon: string[] = ['bulbasaur', 'squirtle', 'charmander'];
  pokeList: any[] = [];

  constructor(private pokeAPI: PokemonService, private router: Router) {}

  ngOnInit(): void {
    console.log('homepage');
    this.pokeAPI.getPokemon(true, this.starterPokemon);
    this.pokeAPI.pokeObs$.subscribe((pokeData: any) => {
      this.pokeList = [...pokeData];
    });
  }

  choosePokemon(name: string) {
    this.pokeAPI.getPokemon(true, [name]);
    this.router.navigate(['pokemon/' + name]);
  }
}
