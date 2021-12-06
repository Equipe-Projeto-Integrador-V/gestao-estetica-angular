import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    ServicosFormComponent,
    ServicosListaComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    FormsModule,
    InputNumberModule
  ], exports: [
    ServicosFormComponent,
    ServicosListaComponent
  ]
})
export class ServicosModule { }
