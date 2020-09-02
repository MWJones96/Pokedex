import { TypeMapService } from './../../services/type-map/type-map.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemonData: any;
  @Input() pokemonSpecies: any;

  constructor(private typeMap: TypeMapService) {}

  ngOnInit(): void {}

  getTypeColour(type:string) {
    return this.typeMap.getColourFromMap(type);
  }
}