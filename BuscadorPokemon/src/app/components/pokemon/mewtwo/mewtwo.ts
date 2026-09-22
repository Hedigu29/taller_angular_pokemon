import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mewtwo',
  imports: [],
  templateUrl: './mewtwo.html',
  styleUrl: './mewtwo.css',
})
export class Mewtwo {
  @Output() alHacerClic = new EventEmitter<string>();

  seleccionar() {
    this.alHacerClic.emit('Mewtwo');
  }
}