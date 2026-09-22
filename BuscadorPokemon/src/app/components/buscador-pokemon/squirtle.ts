import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-squirtle',
  template: `
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle">
      <h3 (click)="alHacerClic.emit('Squirtle')" style="cursor: pointer;">Squirtle</h3>
    </div>
  `
})
export class Squirtle {
  @Output() alHacerClic = new EventEmitter<string>();
}