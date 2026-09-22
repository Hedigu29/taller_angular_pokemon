import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-charizard',
  template: `
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard">
      <h3 (click)="alHacerClic.emit('Charizard')" style="cursor: pointer;">Charizard</h3>
    </div>
  `
})
export class Charizard {
  @Output() alHacerClic = new EventEmitter<string>();
}