import { LayoutComponent } from './../layout/layout.component';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'servicos', component: LayoutComponent, children: [
    {path: 'form', component: ServicosFormComponent },
    { path: 'form/:id', component: ServicosFormComponent },
    { path: 'lista', component : ServicosListaComponent},
    {path: '', redirectTo: '/servicos/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
