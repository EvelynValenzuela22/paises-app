import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino   : string    = '';
  capitales : string[]  = [];
  paises    : Country[] = []
  hayError  : boolean   = false;
  
  constructor( private paisService : PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino : string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPaisPorCapital(this.termino)
    .subscribe({

      next : (resp) => this.paises = resp,
      error: (err)  => {
        this.hayError = true;
        this.capitales = [];
      }
      });
  }

  sugerencias( termino : string ) {
    this.termino = termino;
  }

}
