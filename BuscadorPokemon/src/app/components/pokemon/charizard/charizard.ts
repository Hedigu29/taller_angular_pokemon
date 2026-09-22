import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-charizard',
  imports: [],
  templateUrl: './charizard.html',
  styleUrl: './charizard.css',
})
export class Charizard {
  @Output() alHacerClic = new EventEmitter<string>();

  seleccionar() {
    this.alHacerClic.emit('Charizard');
  }
}