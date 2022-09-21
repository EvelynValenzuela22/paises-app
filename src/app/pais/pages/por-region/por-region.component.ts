import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`]
  
})
export class PorRegionComponent  {

  
  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises : Country[] = [];

  getClass(region: string) : string {
   return  (region === this.regionActiva) ? 'btn btn-info' : 'btn btn-outline-info';
  }

  constructor(
    private paisService : PaisService
  ) { }

  activarRegion(region  : string) {

    if(region === this.regionActiva) {return;}
    
    this.regionActiva = region;
    this.paisService.getPaisesPorRegion(this.regionActiva)
    .subscribe({
      next : (resp) => {this.paises = resp},
      error: (err)  => {
        this.paises = [];
      }
      });
  }

}
