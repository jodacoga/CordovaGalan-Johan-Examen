import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ListarComponent } from './componentes/reserva/listar/listar.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { RestauranteComponent } from './componentes/restaurante/restaurante.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'reserva/listar', component: ListarComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
