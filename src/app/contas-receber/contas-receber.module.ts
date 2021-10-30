import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasReceberRoutingModule } from './contas-receber-routing.module';
import { ContasReceberFormComponent } from './contas-receber-form/contas-receber-form.component';
import { ContasReceberListaComponent } from './contas-receber-lista/contas-receber-lista.component';


@NgModule({
  declarations: [
    ContasReceberFormComponent,
    ContasReceberListaComponent
  ],
  imports: [
    CommonModule,
    ContasReceberRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    ContasReceberFormComponent,
    ContasReceberListaComponent
  ]
})
export class ContasReceberModule { }
