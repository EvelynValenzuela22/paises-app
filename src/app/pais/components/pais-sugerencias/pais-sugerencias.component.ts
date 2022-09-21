import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-sugerencias',
  templateUrl: './pais-sugerencias.component.html',
  styles: ['li { cursor : pointer}']
})
export class PaisSugerenciasComponent {

  @Input() terminosSugeridos : Country[]  = [];
  @Input() termino : string = '';

  @Output() onBuscarSugerido :EventEmitter<string> = new EventEmitter();

  constructor() { }

  buscarSugerido( termino :string) {
    this.onBuscarSugerido.emit(termino);
  }

}
