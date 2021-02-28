import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
//import {} from 

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listaPeliculas: any[];
  reserva: any = {};

  constructor(
              private router: Router,
              private reservaSrervice: ReservaService
    ) 
    { }


  ngOnInit(): void {
    let clienteId = localStorage.getItem('ClienteId')

    if (!clienteId) {
      alert('debe logearse para ingresar a esta opción')
      this.router.navigate(['Home'])
    }


  }

  Guardar(){

  }

}
