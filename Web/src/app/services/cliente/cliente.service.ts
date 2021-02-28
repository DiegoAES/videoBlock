import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private httpClient: HttpClient ) { }

  listarClientes(){
    return this.httpClient.get<any[]>('http://localhost:50678/api/cliente');
  }

  guardarCliente( cliente ){
    return this.httpClient.post('http://localhost:50678/api/cliente', cliente);
  }

  ModificarCliente( id, cliente ){
    return this.httpClient.put(`http://localhost:50678/api/cliente/${id}`, cliente);
  }

  EliminarCliente( id){
    return this.httpClient.delete(`http://localhost:50678/api/cliente/${id}`);
  }
  
  BuscarCliente( id){
    return this.httpClient.get(`http://localhost:50678/api/cliente/${id}`);
  }

  LogIn( cliente ){
    return this.httpClient.post<any>(`http://localhost:50678/api/cliente/LogIn`, cliente);
  }

}
