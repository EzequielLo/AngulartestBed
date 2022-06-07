import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PokemonsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be bulbasaur', (done) => {
    service.getPokemon(1).subscribe(data => {
      expect(data.name).toBe('bulbasaur');
      done();
    })
  })
});
