import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

  constructor() { }

  ngOnInit(): void {
  }

}
