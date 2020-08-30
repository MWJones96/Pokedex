import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';

let typeMap = new Map([
  ["normal", ""],
  ["fight", ""],
  ["flying", ""],
  ["poison", "#a040a0"],
  ["ground", ""],
  ["rock", ""],
  ["bug", ""],
  ["ghost", ""],
  ["steel", ""],
  ["fire", ""],
  ["water", ""],
  ["grass", "#78c850"],
  ["electric", ""],
  ["psychic", ""],
  ["ice", ""],
  ["dragon", ""],
  ["dark", ""],
  ["fairy", ""]
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
