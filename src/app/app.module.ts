import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';

let typeToColourMap = new Map([
  ["normal", "#a8a878"],
  ["fight", "#c03028"],
  ["flying", "#a890f0"],
  ["poison", "#a040a0"],
  ["ground", "#e0c068"],
  ["rock", "#b8a038"],
  ["bug", "#a8b820"],
  ["ghost", "#705898"],
  ["steel", "#b8b8d0"],
  ["fire", "#f08030"],
  ["water", "#6890f0"],
  ["grass", "#78c850"],
  ["electric", "#f8d030"],
  ["psychic", "#f85888"],
  ["ice", "#98d8d8"],
  ["dragon", "#7038f8"],
  ["dark", "#705848"],
  ["fairy", "#f098b0"]
]);

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
