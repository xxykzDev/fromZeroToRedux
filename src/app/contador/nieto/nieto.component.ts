import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css'],
})
export class NietoComponent {
  @Input() contador: any;
  @Output() contadorHijo: EventEmitter<number> = new EventEmitter();

  reset() {
    this.contador = 0;
    this.contadorHijo.emit(0);
  }
}
