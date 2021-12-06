import { LayoutComponent } from './../layout/layout.component';
import { ContasPagarListaComponent } from './contas-pagar-lista/contas-pagar-lista.component';
import { ContasPagarFormComponent } from './contas-pagar-form/contas-pagar-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {path: 'contas-pagar', component: LayoutComponent, canActivate: [AuthGuard], children: [
  {path : 'form', component: ContasPagarFormComponent },
  {path : 'lista', component: ContasPagarListaComponent },
  {path: '', redirectTo: '/contas-pagar/lista', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasPagarRoutingModule { }
