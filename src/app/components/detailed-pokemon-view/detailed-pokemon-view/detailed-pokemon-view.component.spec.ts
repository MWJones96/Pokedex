import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPokemonViewComponent } from './detailed-pokemon-view.component';

describe('DetailedPokemonViewComponent', () => {
  let component: DetailedPokemonViewComponent;
  let fixture: ComponentFixture<DetailedPokemonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedPokemonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPokemonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
