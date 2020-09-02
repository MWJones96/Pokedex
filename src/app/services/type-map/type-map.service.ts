import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeMapService {
  typeToColourMap =  new Map([
    ["normal", "#a8a878"],
    ["fighting", "#c03028"],
    ["flying", "#a890f0"],
    ["poison", "#a040a0"],
    ["ground", "#e0c068"],
    ["rock", "#b8a038"],
    ["bug", "#a8b820"],
    ["ghost", "#705898"],
    ["steel", "#b8b8d0"],
    ["fire", "#f08030"],
    ["water", "#6890f0"],
    ["grass", "#78c850"],
    ["electric", "#f8d030"],
    ["psychic", "#f85888"],
    ["ice", "#98d8d8"],
    ["dragon", "#7038f8"],
    ["dark", "#705848"],
    ["fairy", "#f098b0"]
  ]);

  constructor() { }

  getColourFromMap(type:string) {
    return this.typeToColourMap.get(type);
  }
}
