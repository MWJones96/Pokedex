import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexComponentComponent } from './pokedex-component.component';

describe('PokedexComponentComponent', () => {
  let component: PokedexComponentComponent;
  let fixture: ComponentFixture<PokedexComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
