import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';
import { FornecedoresListaComponent } from './fornecedores-lista/fornecedores-lista.component';


@NgModule({
  declarations: [
    FornecedoresFormComponent,
    FornecedoresListaComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    FormsModule
  ], exports: [
    FornecedoresFormComponent,
    FornecedoresListaComponent
  ]
})
export class FornecedoresModule { }
