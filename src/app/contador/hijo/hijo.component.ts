import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Input() contador: any;
  @Output() contadorHijo: EventEmitter<number> = new EventEmitter();

  multiplicar() {
    this.contador = this.contador *= 2;
    this.contadorHijo.emit(this.contador);
  }
  dividir() {
    this.contador = this.contador /= 2;
    this.contadorHijo.emit(this.contador);
  }
}
