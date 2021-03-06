import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { ContasReceberService } from './contas-receber.service';
import { OrdensDeServicoService } from './ordens-de-servico.service';
import { ContasPagarService } from './contas-pagar.service';
import { AgendamentosService } from './agendamentos.service';
import { ClientesService } from './clientes.service';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { InputMaskModule } from 'primeng/inputmask'
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from "primeng/panel";
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    FuncionariosModule,
    ServicosModule,
    FornecedoresModule,
    AgendamentosModule,
    OrdensDeServicoModule,
    ContasReceberModule,
    ContasPagarModule,
    FormsModule,
    InputMaskModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    ChartModule,
    CardModule
  ],
  providers: [
    ClientesService,
    AgendamentosService,
    OrdensDeServicoService,
    ContasPagarService,
    ContasReceberService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
