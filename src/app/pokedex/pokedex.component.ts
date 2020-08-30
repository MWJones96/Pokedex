import { PokeAPIService } from './../poke-api.service';
import { PokemonComponent } from './../pokemon/pokemon.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemonIndices = Array.from(Array(151), (_, i) => i + 1);
  pokemon = [];
  typeToColourMap =  new Map([
      ["normal", "#a8a878"],
      ["fighting", "#c03028"],
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

  constructor(api: PokeAPIService) {
    for (let i of this.pokemonIndices) {
      api.getPokemon(i).subscribe(res => this.pokemon.push(res));
    }
  }

  ngOnInit(): void {
  }

}
