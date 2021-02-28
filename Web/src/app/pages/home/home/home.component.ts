import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cliente: any = {};

  constructor( 
                private clienteService: ClienteService,
                private router: Router,
     ) 
     { }

  ngOnInit(): void {

  }

  LogIn(){
    this.clienteService.LogIn( this.cliente )
      .subscribe( respuesta => {
        if ( respuesta === null )
        {
          alert('usuario o contraseña erroneos')
          return false;
        }
        localStorage.setItem('ClienteId',respuesta.ClienteId);
        this.router.navigate(['/Pelicula'])        
      });
  }

}
