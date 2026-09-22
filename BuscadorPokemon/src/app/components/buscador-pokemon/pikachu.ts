import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pikachu',
  template: `
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu">
      <h3 (click)="alHacerClic.emit('Pikachu')" style="cursor: pointer;">Pikachu</h3>
    </div>
  `
})
export class Pikachu {
  @Output() alHacerClic = new EventEmitter<string>();
}