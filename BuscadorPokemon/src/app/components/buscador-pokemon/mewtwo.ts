import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mewtwo',
  template: `
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="Mewtwo">
      <h3 (click)="alHacerClic.emit('Mewtwo')" style="cursor: pointer;">Mewtwo</h3>
    </div>
  `
})
export class Mewtwo {
  @Output() alHacerClic = new EventEmitter<string>();
}