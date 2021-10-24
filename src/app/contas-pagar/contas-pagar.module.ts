import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasPagarRoutingModule } from './contas-pagar-routing.module';
import { ContasPagarFormComponent } from './contas-pagar-form/contas-pagar-form.component';


@NgModule({
  declarations: [
    ContasPagarFormComponent
  ],
  imports: [
    CommonModule,
    ContasPagarRoutingModule,
    FormsModule
  ], exports: [
    ContasPagarFormComponent
  ]
})
export class ContasPagarModule { }
