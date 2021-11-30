import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { AgendamentosListaComponent } from './agendamentos-lista/agendamentos-lista.component';
import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'agendamentos', component: LayoutComponent, canActivate: [AuthGuard], children: [
  { path: 'form', component : AgendamentosFormComponent },
  { path: 'lista', component : AgendamentosListaComponent },
  { path: '', redirectTo: '/agendamentos/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentosRoutingModule { }
