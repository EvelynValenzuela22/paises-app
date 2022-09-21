import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = "https://restcountries.com/v2";

  get httpParams() {
    return new HttpParams().set( "fields", "name,capital,alpha2Code,flags,population");

  }

  constructor( private http : HttpClient ) { }

  buscarPais(termino : string) : Observable<Country[]> {

    const urlName = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(urlName, {params: this.httpParams});

  }

  buscarPaisPorCapital(termino : string) : Observable<Country[]> {

    const urlName = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(urlName, {params: this.httpParams});
    
  }

  getPaisPorAlpha(id : string) : Observable<Country> {

    const urlName = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(urlName);
    
  }

  getPaisesPorRegion(region : string) : Observable<Country[]> {


    const urlName = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(urlName, {params: this.httpParams});
    
  }

}
