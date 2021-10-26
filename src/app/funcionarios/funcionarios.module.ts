import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';


@NgModule({
  declarations: [
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    FormsModule
  ], exports: [
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ]
})
export class FuncionariosModule { }
