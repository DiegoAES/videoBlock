import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor( private httpClient: HttpClient ) { }

  listarClientes(){
    return this.httpClient.get<any[]>('http://localhost:50678/api/Pelicula');
  }
}
