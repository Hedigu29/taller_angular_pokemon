import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  template: `
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur">
      <h3 (click)="alHacerClic.emit('Bulbasaur')" style="cursor: pointer;">Bulbasaur</h3>
    </div>
  `
})
export class Bulbasaur {
  @Output() alHacerClic = new EventEmitter<string>();
}