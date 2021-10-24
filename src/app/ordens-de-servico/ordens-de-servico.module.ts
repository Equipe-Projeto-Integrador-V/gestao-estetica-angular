import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdensDeServicoRoutingModule } from './ordens-de-servico-routing.module';
import { OrdensDeServicoFormComponent } from './ordens-de-servico-form/ordens-de-servico-form.component';


@NgModule({
  declarations: [
    OrdensDeServicoFormComponent
  ],
  imports: [
    CommonModule,
    OrdensDeServicoRoutingModule,
    FormsModule
  ], exports: [
    OrdensDeServicoFormComponent
  ]
})
export class OrdensDeServicoModule { }
