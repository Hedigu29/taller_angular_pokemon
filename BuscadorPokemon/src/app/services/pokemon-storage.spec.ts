import { TestBed } from '@angular/core/testing';

import { PokemonStorage } from './pokemon-storage';

describe('PokemonStorage', () => {
  let service: PokemonStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
