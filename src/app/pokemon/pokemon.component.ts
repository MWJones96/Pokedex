import { PokeAPIService } from './../poke-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() name: string;
  @Input() pokedexNumber: number;
  @Input() typeColours: string[];

  constructor(api: PokeAPIService) {
    var data = api.getPokemon(1);
    console.log(data);
  }

  ngOnInit(): void {
  }

}
