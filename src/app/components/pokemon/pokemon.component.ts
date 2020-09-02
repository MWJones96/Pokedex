import { TypeMapService } from './../../services/type-map/type-map.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() data: Pokemon;
  @Output() selectionEvent = new EventEmitter();

  constructor(private typeMap: TypeMapService) {}

  ngOnInit(): void {}

  getTypeColour(type:string) {
    return this.typeMap.getColourFromMap(type);
  }
}