import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon, PokeApiResponse } from './pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  // Busca un Pokémon por nombre y devuelve el nombre y la imagen
  getPokemon(name: string): Observable<Pokemon> {
    const query = name.trim().toLowerCase();
    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${query}`).pipe(
      map((res) => ({
        name: res.name,
        image:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
      })),
    );
  }
}
