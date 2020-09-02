import { PokeAPIService } from '../../services/poke-api/poke-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemonIndices = Array.from(Array(251), (_, i) => i + 1);
  pokemon = [];
  pokemonSpecies = [];

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
      api.getPokemon(i).subscribe(res => {
        this.pokemon.push(res);
        this.pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1);
      });

      api.getSpeciesInfo(i).subscribe(res => {
        this.pokemonSpecies.push(res);
        this.pokemonSpecies.sort((a, b) => (a.id > b.id) ? 1 : -1);
      });
    }
  }

  ngOnInit(): void {
    
  }

}
