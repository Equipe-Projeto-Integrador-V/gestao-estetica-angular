import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'funcionarios-form', component: FuncionariosFormComponent },
  { path: 'funcionarios-form/:id', component: FuncionariosFormComponent },
  { path: 'funcionarios-lista', component : FuncionariosListaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
