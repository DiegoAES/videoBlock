import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor( private httpClient: HttpClient ) { }

  GuardarReservas( reserva ){
    return this.httpClient.post(`http://localhost:50678/api/Reserva`, reserva);
  }

  ListaReservas( id ){
    return this.httpClient.get<any>(`http://localhost:50678/api/Reserva/${id}`);
  }
}
