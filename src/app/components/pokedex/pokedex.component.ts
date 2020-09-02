import { PokeAPIService } from '../../services/poke-api/poke-api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

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

  initialisePokedex() {
    this.api.getPokedex().subscribe(res => {
      let entries = res.pokemon_entries;
      for (let entry of entries) {
        this.pokemon.push(new Pokemon());

        this.api.getSpeciesData(entry.entry_number).subscribe(res => {
          this.pokemon[res.id-1].id = res.id;
          this.pokemon[res.id-1].name = this.getEnglishName(res.names);
        });

        this.api.getPokemonData(entry.entry_number).subscribe(res => {
          this.pokemon[res.id-1].types = res.types.map(val => val.type.name);
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

    return "???";
  }
}
