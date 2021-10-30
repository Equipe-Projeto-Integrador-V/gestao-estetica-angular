import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { AgendamentosListaComponent } from './agendamentos-lista/agendamentos-lista.component';


@NgModule({
  declarations: [
    AgendamentosFormComponent,
    AgendamentosListaComponent
  ],
  imports: [
    CommonModule,
    AgendamentosRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    AgendamentosFormComponent,
    AgendamentosListaComponent
  ]
})
export class AgendamentosModule { }
