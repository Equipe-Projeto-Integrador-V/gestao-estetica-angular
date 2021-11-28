import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContasReceberService } from 'src/app/contas-receber.service';
import { ContaAReceber } from '../contas-receber.model';

@Component({
  selector: 'app-contas-receber-form',
  templateUrl: './contas-receber-form.component.html',
  styleUrls: ['./contas-receber-form.component.css'],
})
export class ContasReceberFormComponent implements OnInit {
  contaAReceber: ContaAReceber;
  errors?: string[] | null;
  id?: number; //id passado via parametro
  success: boolean = false;

  constructor(
    private contasReceberService: ContasReceberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.contaAReceber = new ContaAReceber();
  }

  ngOnInit(): void {
    //seta o form com as infos do id passado via params
    let params = this.activatedRoute.params;
    params.forEach((value) => {
      if (value.id) {
        this.id = value.id;
        this.contaAReceber.id = this.id;
        this.contasReceberService
          .consultarContaPeloId(this.contaAReceber)
          .subscribe(
            (response) => this.carregarModel(response),
            (errorResponse) => (this.contaAReceber = new ContaAReceber())
          );
      }
    });
  }

  carregarModel(response: any) {
    this.contaAReceber.id = response.id;
    this.contaAReceber.emissao = new Date(response.emissao);
    this.contaAReceber.vencimento = new Date(response.vencimento);
    this.contaAReceber.recebimento = new Date(response.recebimento);
    this.contaAReceber.valor = response.valor;
    this.contaAReceber.valorRecebido = response.valorRecebido;
    this.contaAReceber.status = response.status;
    this.contaAReceber.cliente = response.cliente;
    this.contaAReceber.ordemServico = response.ordemServico;
  }

  voltarParaListagem() {
    this.router.navigate(['/contas-receber-lista']);
  }

  onSubmit() {
    if (this.id) {
      this.contasReceberService
        .atualizarContaAReceber(this.contaAReceber)
        .subscribe(
          (response) => {
            this.success = true;
            this.errors = null;
          },
          (errorResponse) => {
            this.errors = ['Erro ao atualizar o cliente'];
          }
        );
    } else {
      this.contasReceberService
        .cadastrarNovaContaAReceber(this.contaAReceber)
        .subscribe(
          (response) => {
            this.success = true;
            console.log(response);
            this.errors = null;
            this.contaAReceber = response; //mostra as infos
          },
          (errorResponse) => {
            this.success = false;
            this.errors = errorResponse.error.errors;
            console.log(errorResponse.error.errors);
          }
        );
    }
  }
}
