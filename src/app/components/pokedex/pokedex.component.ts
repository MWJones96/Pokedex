import { PokeAPIService } from '../../services/poke-api/poke-api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemonIndices = Array.from(Array(386), (_, i) => i + 1);
  pokemon = [];
  pokemonSpecies = [];

  @Output() selectionEvent = new EventEmitter();

  constructor(private api: PokeAPIService) {}

  ngOnInit(): void {
    for (let i of this.pokemonIndices) {
      this.api.getPokemon(i).subscribe(res => {
        this.pokemon.push(res);
        this.pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1);
      });

      this.api.getSpeciesInfo(i).subscribe(res => {
        this.pokemonSpecies.push(res);
        this.pokemonSpecies.sort((a, b) => (a.id > b.id) ? 1 : -1);
      });
    }
  }
}
