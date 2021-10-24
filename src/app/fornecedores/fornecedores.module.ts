import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';


@NgModule({
  declarations: [
    FornecedoresFormComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    FormsModule
  ], exports: [
    FornecedoresFormComponent
  ]
})
export class FornecedoresModule { }
