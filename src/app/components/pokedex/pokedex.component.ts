import { PokeAPIService } from '../../services/poke-api/poke-api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],

})
export class PokedexComponent implements OnInit {
  @Output() selectionEvent = new EventEmitter();
  pokemon: Pokemon[] = [];
  gens: number[] = [1, 152, 252, 387, 494, 650, 722, 808];
  loaded: boolean = false;
  currentGen = 1;

  constructor(private api: PokeAPIService) {}

  ngOnInit(): void {
    this.initialisePokedex(this.currentGen);
  }

  onGenChange(gen: number) {
    this.loaded = false;
    this.currentGen = gen;
    this.initialisePokedex(this.currentGen);
  }

  async initialisePokedex(gen: number) {
    this.pokemon = [];
    await this.api.getPokedex().toPromise().then(async (res) => {
      let entries = (res.pokemon_entries as Array<any>).slice(this.gens[gen-1]-1, this.gens[gen]-1);
      let offset = entries[0].entry_number;

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
            this.updatePokemon(this.pokemon[res.id-offset], data_payload);
          });
        });
      }

      this.loaded = true;
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
    pokemon.id = data.id
    pokemon.name = data.name;
    pokemon.types = data.types
  }
}
