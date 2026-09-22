import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-squirtle',
  imports: [],
  templateUrl: './squirtle.html',
  styleUrl: './squirtle.css',
})
export class Squirtle {
  @Output() alHacerClic = new EventEmitter<string>();

  seleccionar() {
    this.alHacerClic.emit('Squirtle');
  }
}