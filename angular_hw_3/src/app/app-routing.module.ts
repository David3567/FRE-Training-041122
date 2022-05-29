import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FocusedPokemonComponent } from './focused-pokemon/focused-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: 'home', component: PokemonComponent },
  { path: 'home', component: PokemonComponent },
  { path: 'pokemon/:pokemon', component: FocusedPokemonComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
