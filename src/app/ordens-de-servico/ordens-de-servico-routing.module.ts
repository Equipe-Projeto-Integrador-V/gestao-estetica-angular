import { OrdensDeServicoListaComponent } from './ordens-de-servico-lista/ordens-de-servico-lista.component';
import { OrdensDeServicoFormComponent } from './ordens-de-servico-form/ordens-de-servico-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ordens-de-servicos-form', component: OrdensDeServicoFormComponent },
  { path: 'ordens-de-servicos-form/:id', component: OrdensDeServicoFormComponent },
  { path: 'ordens-de-servicos-lista', component: OrdensDeServicoListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensDeServicoRoutingModule { }
