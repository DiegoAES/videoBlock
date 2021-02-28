import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[];
  cliente: any = {};

  constructor(
              private clienteService: ClienteService,
              private router: Router
              ) 
              { }

  ngOnInit(): void {
    let clienteId = localStorage.getItem('ClienteId')

    if (!clienteId) {
      alert('debe logearse para ingresar a esta opción')
      this.router.navigate(['Home'])
    }

    let cliente: any = {}
    this.clienteService.BuscarCliente( clienteId )
          .subscribe( respuesta => {
            cliente = respuesta;

            if (cliente.EsAdministrador !== true){
              alert('Solo los administradores pueden ingresar a esta opción')
              this.router.navigate(['Home'])
            }
            this.cargarLista();
          });

    
  }

  cargarLista() {
    this.clientes = [];

    this.clienteService.listarClientes()
      .subscribe(respuesta => {
        this.clientes = respuesta;
      });
  }

  seleccionar(id) {
    this.clienteService.BuscarCliente(id)
      .subscribe(cliente => {
        this.cliente = cliente;
      })
  }

  Guardar() {
    this.clienteService.guardarCliente(this.cliente)
      .subscribe(() => {
        this.cargarLista();
        this.cliente = {}
      })

  }

  Eliminar(id) {
    this.clienteService.EliminarCliente(id)
      .subscribe(() => {
        this.cargarLista();
      })
  }

  Cancelar() {
    this.cliente = {}
  }

  Editar() {
    this.clienteService.ModificarCliente(this.cliente.ClienteId, this.cliente)
      .subscribe(() => {
        console.log('exitoso')
        this.cargarLista();
        this.cliente = {}
      })
  }

}
