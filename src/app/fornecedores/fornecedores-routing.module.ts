import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { FornecedoresListaComponent } from './fornecedores-lista/fornecedores-lista.component';
import { FornecedoresFormComponent } from './fornecedores-form/fornecedores-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'fornecedores', component: LayoutComponent, canActivate: [AuthGuard], children: [

   { path: 'form', component: FornecedoresFormComponent },
   { path: 'form/:id', component: FornecedoresFormComponent },
   { path: 'lista', component : FornecedoresListaComponent},
   { path: '', redirectTo: '/fornecedores/lista', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
