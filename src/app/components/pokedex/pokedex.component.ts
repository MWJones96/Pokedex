import { PokeAPIService } from '../../services/poke-api/poke-api.service';
import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],

})
export class PokedexComponent implements OnInit {
  @Output() selectionEvent = new EventEmitter();
  pokemon: Pokemon[] = [];

  constructor(private api: PokeAPIService) {}

  ngOnInit(): void {
    this.initialisePokedex();
  }

  async initialisePokedex() {
    await this.api.getPokedex().toPromise().then(async (res) => {
      let entries = res.pokemon_entries;
      for (let entry of entries) {
        this.pokemon.push(new Pokemon());

        let data_payload = {
          id: 0,
          name: "Missingno",
          types: ["normal"]
        };

        await this.api.getPokemonData(entry.entry_number).toPromise().then(async (res) => {
          data_payload.id = res.id;
          data_payload.types = res.types.map(e => e.type.name);

          await this.api.getSpeciesData(entry.entry_number).toPromise().then(async (res) => {
            data_payload.name = this.getEnglishName(res.names);
            this.updatePokemon(this.pokemon[res.id-1], data_payload);
          });
        });
      }
    });
  }

  getEnglishName(names: any[]): string {
    if (names[8].language.name == "en") {
      return names[8].name;
    }

    if (names[7].language.name == "en") {
      return names[7].name;
    }

    for (let name of names) {
      if (name.language.name == "en") {
        return name.name;
      }
    }

    return "Missingno";
  }

  updatePokemon(pokemon: Pokemon, data: any) {
    this.pokemon[data.id-1].id = data.id
    this.pokemon[data.id-1].name = data.name;
    this.pokemon[data.id-1].types = data.types
  }
}
