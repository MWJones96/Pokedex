import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  name: string;
  pokedexNumber: number;

  constructor() {
    this.name = "Bulbasaur";
    this.pokedexNumber = 1;
  }

  ngOnInit(): void {
  }

}
