import { Component } from '@angular/core';
import { Pikachu } from './pikachu';
import { Charizard } from './charizard';
import { Bulbasaur } from './bulbasaur';
import { Squirtle } from './squirtle';
import { Mewtwo } from './mewtwo';
import { Eevee } from './eevee';

@Component({
  selector: 'app-buscador-pokemon',
  imports: [
    Pikachu,
    Charizard,
    Bulbasaur,
    Squirtle,
    Mewtwo,
    Eevee
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