import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { PeliculaService } from 'src/app/services/pelicula/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  displayedColumns: string[] = ['Titulo', 'Descripcion', 'Director', 'Costo', 'Cantidad'];
  dataSource = new MatTableDataSource();

  constructor( private peliculaService: PeliculaService ) { 
    peliculaService.listarClientes()
      .subscribe( respuesta =>  {
        
        this.dataSource = new MatTableDataSource( respuesta );      
      })
  }
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
