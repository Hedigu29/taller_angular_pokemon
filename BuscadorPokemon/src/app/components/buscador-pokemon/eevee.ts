import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eevee',
  template: `
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" alt="Eevee">
      <h3 (click)="alHacerClic.emit('Eevee')" style="cursor: pointer;">Eevee</h3>
    </div>
  `
})
export class Eevee {
  @Output() alHacerClic = new EventEmitter<string>();
}