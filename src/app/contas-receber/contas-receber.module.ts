import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';

import { ContasReceberRoutingModule } from './contas-receber-routing.module';
import { ContasReceberFormComponent } from './contas-receber-form/contas-receber-form.component';
import { ContasReceberListaComponent } from './contas-receber-lista/contas-receber-lista.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    ContasReceberFormComponent,
    ContasReceberListaComponent
  ],
  imports: [
    CommonModule,
    ContasReceberRoutingModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    InputTextModule
  ], exports: [
    ContasReceberFormComponent,
    ContasReceberListaComponent
  ]
})
export class ContasReceberModule { }
