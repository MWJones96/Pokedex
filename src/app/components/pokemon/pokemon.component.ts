import { PokeAPIService } from '../../services/poke-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemonData: any;
  @Input() pokemonSpecies: any;
  @Input() typeMap: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}