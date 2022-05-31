import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject, tap } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  starterPokemon: string[] = ['bulbasaur', 'squirtle', 'charmander'];
  base_url: string = 'https://pokeapi.co/api/v2';
  pokeSubject$: Subject<unknown> = new Subject();
  pokeObs$: Observable<any> = this.pokeSubject$.asObservable();
  pokeArray: any[] = [];

  constructor(private http: HttpClient) {}

  getPokemon(filter: boolean = true, pokeArray?: string[]) {
    const pokeArrayDisplay = pokeArray;
    // console.log(pokeArrayDisplay);
    this.http
      .get([this.base_url, 'pokemon'].join('/'))
      .pipe(
        map((res: any) => {
          const pokemonTemp: PokemonResponse = res.results.map(
            (pokemon: any) => {
              if (filter) {
                if (pokeArrayDisplay?.includes(pokemon.name)) {
                  return {
                    name: pokemon.name,
                    url: this.getPokemonDetails(pokemon.url),
                  };
                } else {
                  return null;
                }
              } else {
                return {
                  name: pokemon.name,
                  url: this.getPokemonDetails(pokemon.url),
                };
              }
            }
          );
          return pokemonTemp;
        }),
        tap((res: any) => {
          this.pokeArray = [...res.filter((ele: any) => ele)];
          this.pokeSubject$.next(this.pokeArray);
        })
      )
      .subscribe();
  }

  getPokemonDetails(url: string) {
    let tempResponse: any[] = [];
    this.http.get(url).subscribe((res: any) => {
      tempResponse.push({
        abilities: res.abilities,
        base_experience: res.base_experience,
        forms: res.forms,
        game_indicies: res.game_indicies,
        height: res.height,
        held_items: res.held_items,
        id: res.id,
        is_default: res.is_default,
        location_area_encounters: res.location_area_encounters,
        moves: res.moves,
        species: res.species,
        sprites: res.sprites,
        stats: res.stats,
        types: res.types,
        weight: res.weight,
      });
    });

    return tempResponse;
  }
}
