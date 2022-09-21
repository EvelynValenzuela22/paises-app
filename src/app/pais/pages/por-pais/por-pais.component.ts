import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  
  termino  : string    = '';
  paises   : Country[] = [];
  hayError : boolean   = false;
  

  mostrarSugerencias: boolean = false;
  paisesSugeridos : Country[] = [];

  
  constructor( private paisService : PaisService ) { }

  buscar(termino : string) {
    
    this.hayError = false;
    this.termino = termino;
    console.log(termino);

    this.paisService.buscarPais(this.termino)
    .subscribe({

      next : (resp) => {this.paises = resp},
      error: (err)  => {
        this.hayError = true;
        this.paises = [];
      }
      });
  }

  sugerencias( termino : string ) {
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
    .subscribe({
      
      next : paises => this.paisesSugeridos = paises.splice(0,5),
      error: errr   => this.paisesSugeridos = []
      
      });
  }

  buscarSugerido(termino : string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }

}
