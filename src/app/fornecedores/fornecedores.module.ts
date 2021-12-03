import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';
import { FornecedoresListaComponent } from './fornecedores-lista/fornecedores-lista.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    FornecedoresFormComponent,
    FornecedoresListaComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    FormsModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule
  ], exports: [
    FornecedoresFormComponent,
    FornecedoresListaComponent
  ]
})
export class FornecedoresModule { }
