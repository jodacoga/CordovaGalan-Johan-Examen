import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { RestauranteComponent } from './componentes/restaurante/restaurante.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
