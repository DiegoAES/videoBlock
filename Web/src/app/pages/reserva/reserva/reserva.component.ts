import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula/pelicula.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
//import {} from 

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listaPeliculas: any[];
  listaPeliculasGuardadas: any[];
  reserva: any = {};
  clienteId

  constructor(
              private router: Router,
              private reservaSrervice: ReservaService,
              private peliculaService: PeliculaService
    ) 
    { }


  ngOnInit(): void {
    this.clienteId = localStorage.getItem('ClienteId')

    if (!this.clienteId) {
      alert('debe logearse para ingresar a esta opción')
      this.router.navigate(['Home'])
    }

    this.peliculaService.listarPeliculas()
      .subscribe( respuesta => {
        this.listaPeliculas = respuesta;
      })

      this.reservaSrervice.ListaReservas( this.clienteId )
        .subscribe( respuesta => {
          this.listaPeliculasGuardadas = respuesta;
        })

  }

  Guardar(){

    this.reserva.ClienteId = this.clienteId;

    this.reservaSrervice.GuardarReservas( this.reserva )
      .subscribe( respuesta => {

      });
  }

}
