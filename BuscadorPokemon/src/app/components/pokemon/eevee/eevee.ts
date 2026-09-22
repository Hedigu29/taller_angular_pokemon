import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eevee',
  imports: [],
  templateUrl: './eevee.html',
  styleUrl: './eevee.css',
})
export class Eevee {
  @Output() alHacerClic = new EventEmitter<string>();

  seleccionar() {
    this.alHacerClic.emit('Eevee');
  }
}