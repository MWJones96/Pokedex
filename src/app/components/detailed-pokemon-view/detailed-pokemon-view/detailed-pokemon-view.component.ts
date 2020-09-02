import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detailed-pokemon-view',
  templateUrl: './detailed-pokemon-view.component.html',
  styleUrls: ['./detailed-pokemon-view.component.css']
})
export class DetailedPokemonViewComponent implements OnInit {
  @Output() backEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
