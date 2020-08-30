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

  constructor() {
  }

  ngOnInit(): void {
  }

}
