import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';


@NgModule({
  declarations: [
    AgendamentosFormComponent
  ],
  imports: [
    CommonModule,
    AgendamentosRoutingModule,
    FormsModule
  ], exports: [
    AgendamentosFormComponent
  ]
})
export class AgendamentosModule { }
