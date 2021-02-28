import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente/cliente.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula/pelicula.component';
import { ReservaComponent } from './pages/reserva/reserva/reserva.component';


const routes: Routes = [
  {
    path:'', redirectTo: '/Home', pathMatch: 'full'
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Cliente', component: ClienteComponent
  },
  {
    path: 'Pelicula', component: PeliculaComponent
  },
  {
    path: 'Reserva', component: ReservaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
