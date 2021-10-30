import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasPagarRoutingModule } from './contas-pagar-routing.module';
import { ContasPagarFormComponent } from './contas-pagar-form/contas-pagar-form.component';
import { ContasPagarListaComponent } from './contas-pagar-lista/contas-pagar-lista.component';


@NgModule({
  declarations: [
    ContasPagarFormComponent,
    ContasPagarListaComponent
  ],
  imports: [
    CommonModule,
    ContasPagarRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    ContasPagarFormComponent,
    ContasPagarListaComponent
  ]
})
export class ContasPagarModule { }
