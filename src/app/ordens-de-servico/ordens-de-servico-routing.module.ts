import { LayoutComponent } from './../layout/layout.component';
import { OrdensDeServicoListaComponent } from './ordens-de-servico-lista/ordens-de-servico-lista.component';
import { OrdensDeServicoFormComponent } from './ordens-de-servico-form/ordens-de-servico-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'ordens-de-servicos', component: LayoutComponent, children: [

  { path: 'form', component: OrdensDeServicoFormComponent },
  { path: 'form/:id', component: OrdensDeServicoFormComponent },
  { path: 'lista', component: OrdensDeServicoListaComponent },
  { path: '', redirectTo: '/ordens-de-servicos/lista', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensDeServicoRoutingModule { }
