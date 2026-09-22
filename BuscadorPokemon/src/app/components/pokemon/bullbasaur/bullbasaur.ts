import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bullbasaur',
  imports: [],
  templateUrl: './bullbasaur.html',
  styleUrl: './bullbasaur.css',
})
export class Bullbasaur {
  @Output() alHacerClic = new EventEmitter<string>();

  seleccionar() {
    this.alHacerClic.emit('Bulbasaur');
  }
}