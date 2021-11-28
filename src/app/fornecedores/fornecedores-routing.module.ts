import { FornecedoresListaComponent } from './fornecedores-lista/fornecedores-lista.component';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'fornecedores-form', component: FornecedoresFormComponent },
  { path: 'fornecedores-form/:id', component: FornecedoresFormComponent },
  { path: 'fornecedores-lista', component : FornecedoresListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
