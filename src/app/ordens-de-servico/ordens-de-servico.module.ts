import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdensDeServicoRoutingModule } from './ordens-de-servico-routing.module';
import { OrdensDeServicoFormComponent } from './ordens-de-servico-form/ordens-de-servico-form.component';
import { OrdensDeServicoListaComponent } from './ordens-de-servico-lista/ordens-de-servico-lista.component';


@NgModule({
  declarations: [
    OrdensDeServicoFormComponent,
    OrdensDeServicoListaComponent
  ],
  imports: [
    CommonModule,
    OrdensDeServicoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    OrdensDeServicoFormComponent,
    OrdensDeServicoListaComponent
  ]
})
export class OrdensDeServicoModule { }
