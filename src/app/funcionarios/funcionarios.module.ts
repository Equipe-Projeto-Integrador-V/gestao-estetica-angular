import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';
import { InputMaskModule } from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';



@NgModule({
  declarations: [
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    FormsModule,
    InputMaskModule,
    PasswordModule

  ], exports: [
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ]
})
export class FuncionariosModule { }
