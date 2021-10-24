import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasReceberRoutingModule } from './contas-receber-routing.module';
import { ContasReceberFormComponent } from './contas-receber-form/contas-receber-form.component';


@NgModule({
  declarations: [
    ContasReceberFormComponent
  ],
  imports: [
    CommonModule,
    ContasReceberRoutingModule,
    FormsModule
  ], exports: [
    ContasReceberFormComponent
  ]
})
export class ContasReceberModule { }
