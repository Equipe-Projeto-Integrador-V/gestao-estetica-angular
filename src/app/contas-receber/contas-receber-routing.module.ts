import { ContasReceberFormComponent } from './contas-receber-form/contas-receber-form.component';
import { ContasReceberListaComponent } from './contas-receber-lista/contas-receber-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'contas-receber-form', component: ContasReceberFormComponent },
  {path : 'contas-receber-lista', component: ContasReceberListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasReceberRoutingModule { }
