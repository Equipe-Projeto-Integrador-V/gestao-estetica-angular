import { ContasPagarModule } from './contas-pagar/contas-pagar.module';
import { ContasReceberModule } from './contas-receber/contas-receber.module';
import { OrdensDeServicoModule } from './ordens-de-servico/ordens-de-servico.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ServicosModule } from './servicos/servicos.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { TemplateModule } from './template/template.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    FuncionariosModule,
    ServicosModule,
    FornecedoresModule,
    AgendamentosModule,
    OrdensDeServicoModule,
    ContasReceberModule,
    ContasPagarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
