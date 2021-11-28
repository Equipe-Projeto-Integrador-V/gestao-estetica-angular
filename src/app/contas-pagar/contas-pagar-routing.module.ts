import { ContasPagarFormComponent } from './contas-pagar-form/contas-pagar-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'contas-pagar-form', component: ContasPagarFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasPagarRoutingModule { }
