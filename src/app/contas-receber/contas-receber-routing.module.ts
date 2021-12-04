import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { ContasReceberFormComponent } from './contas-receber-form/contas-receber-form.component';
import { ContasReceberListaComponent } from './contas-receber-lista/contas-receber-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contas-receber',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'form', component: ContasReceberFormComponent },
      { path: 'form/:id', component: ContasReceberFormComponent },
      { path: 'lista', component: ContasReceberListaComponent },
      { path: '', redirectTo: '/contas-receber/lista', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberRoutingModule {}
