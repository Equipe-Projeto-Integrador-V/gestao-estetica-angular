import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';


@NgModule({
  declarations: [
    ServicosFormComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    FormsModule
  ], exports: [
    ServicosFormComponent
  ]
})
export class ServicosModule { }
