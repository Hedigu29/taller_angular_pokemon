import { Component } from '@angular/core';
import { Bullbasaur } from '../pokemon/bullbasaur/bullbasaur';
import { Charizard } from '../pokemon/charizard/charizard';
import { Eevee } from '../pokemon/eevee/eevee';
import { Mewtwo } from '../pokemon/mewtwo/mewtwo';
import { Pikachu } from '../pokemon/pikachu/pikachu';
import { Squirtle } from '../pokemon/squirtle/squirtle';

@Component({
  selector: 'app-buscador-pokemon',
  imports: [
    Bullbasaur,
    Charizard,
    Eevee,
    Mewtwo,
    Pikachu,
    Squirtle
  ],
  templateUrl: './buscador-pokemon.html',
  styleUrl: './buscador-pokemon.css',
})
export class BuscadorPokemon {
  pokemonSeleccionado: string = '';

  mostrarNombre(nombre: string): void {
    this.pokemonSeleccionado = nombre;
  }
}