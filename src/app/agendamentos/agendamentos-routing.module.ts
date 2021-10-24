import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'agendamentos-form', component : AgendamentosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentosRoutingModule { }
