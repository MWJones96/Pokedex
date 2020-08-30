import { PokemonComponent } from './../pokemon/pokemon.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemon = [new PokemonComponent(), 
            new PokemonComponent()];

  constructor() {
  }

  ngOnInit(): void {
  }

}
