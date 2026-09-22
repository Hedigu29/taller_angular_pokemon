import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pikachu',
  imports: [],
  templateUrl: './pikachu.html',
  styleUrl: './pikachu.css',
})
export class Pikachu {
  @Output() alHacerClic = new EventEmitter<string>();

  seleccionar() {
    this.alHacerClic.emit('Pikachu');
  }
}