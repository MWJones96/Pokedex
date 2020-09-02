import { TestBed } from '@angular/core/testing';
import { TypeMapService } from './type-map.service';

describe('TypeMapService', () => {
  let service: TypeMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
