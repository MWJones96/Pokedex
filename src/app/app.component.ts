import { Component } from '@angular/core';

enum State {
  PokedexView = 'PokedexView',
  DetailedPokemonView = 'DetailedPokemonView'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state: State = State.PokedexView;

  goToDetailedView(event) {
    this.state = State.DetailedPokemonView;
  }

  goToPokedexView() {
    this.state = State.PokedexView;
  }
}
