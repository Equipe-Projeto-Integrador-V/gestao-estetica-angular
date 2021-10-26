import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'servicos-form', component: ServicosFormComponent },
  { path: 'servicos-form/:id', component: ServicosFormComponent },
  { path: 'servicos-lista', component : ServicosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
