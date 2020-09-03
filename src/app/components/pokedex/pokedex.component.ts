import { PokeAPIService } from '../../services/poke-api/poke-api.service';
import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
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

  async initialisePokedex() {
    await this.api.getPokedex().toPromise().then(async (res) => {
      let entries = res.pokemon_entries;
      for (let entry of entries) {
        this.pokemon.push(new Pokemon());

        await this.api.getPokemonData(entry.entry_number).toPromise().then(res => {
          this.pokemon[res.id-1].id = res.id;
          this.pokemon[res.id-1].name = res.name;
          this.pokemon[res.id-1].types = res.types.map(val => val.type.name);
        });
      }
    });
  }
}
