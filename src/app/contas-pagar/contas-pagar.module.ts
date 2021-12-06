import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

import { ContasPagarRoutingModule } from './contas-pagar-routing.module';
import { ContasPagarFormComponent } from './contas-pagar-form/contas-pagar-form.component';
import { ContasPagarListaComponent } from './contas-pagar-lista/contas-pagar-lista.component';


@NgModule({
  declarations: [
    ContasPagarFormComponent,
    ContasPagarListaComponent
  ],
  imports: [
    CommonModule,
    ContasPagarRoutingModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    InputTextModule
  ], exports: [
    ContasPagarFormComponent,
    ContasPagarListaComponent
  ]
})
export class ContasPagarModule { }
