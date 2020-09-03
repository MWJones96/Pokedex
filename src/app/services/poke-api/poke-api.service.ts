import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  constructor(private http: HttpClient) {}

  getPokedex(): Observable<any> {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokedex/1");
  }

  getPokemonData(id: number): Observable<any> {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/" + id);
  }
}
