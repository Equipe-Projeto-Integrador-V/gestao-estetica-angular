import { StatusEnum } from './../../enums/status-enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContasPagarService } from 'src/app/contas-pagar.service';
import { FornecedoresService } from 'src/app/fornecedores.service';
import { Fornecedor } from 'src/app/fornecedores/fornecedor';
import { ContaAPagar } from '../contas-pagar.model';

@Component({
  selector: 'app-contas-pagar-form',
  templateUrl: './contas-pagar-form.component.html',
  styleUrls: ['./contas-pagar-form.component.css'],
})
export class ContasPagarFormComponent implements OnInit {
  statusContasPagar: string[] = [StatusEnum.ABERTO, StatusEnum.CANCELADO, StatusEnum.RECEBIDO];
  contaAPagar: ContaAPagar;
  errors?: string[] | null;
  id?: number; //id passado via parametro
  success: boolean = false;
  fornecedores: Fornecedor[];

  constructor(
    private contasPagarService: ContasPagarService,
    private fornecedorService: FornecedoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.contaAPagar = new ContaAPagar();
    this.fornecedores = [];
  }

  ngOnInit(): void {
    //seta o form com as infos do id passado via params
    let params = this.activatedRoute.params;
    params.forEach((value) => {
      if (value.id) {
        this.id = value.id;
        this.contaAPagar.id = this.id;
        this.contasPagarService
          .consultarContaPeloId(this.contaAPagar)
          .subscribe(
            (response) => this.carregarModel(response),
            (errorResponse) => (this.contaAPagar = new ContaAPagar())
          );
      }
    });

    this.fornecedorService
      .getFornecedores()
      .subscribe((response) => (this.fornecedores = response));
  }

  carregarModel(response: any) {
    this.contaAPagar.id = response.id;
    this.contaAPagar.emissao = new Date(response.emissao);
    this.contaAPagar.vencimento = new Date(response.vencimento);
    this.contaAPagar.valor = response.valor;
    this.contaAPagar.valorPago = response.valorPago;
    this.contaAPagar.status = response.status;
  }

  voltarParaListagem() {
    this.router.navigate(['/contas-pagar/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.contasPagarService.atualizarContaAPagar(this.contaAPagar).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          console.log(errorResponse)
          this.errors = ['Erro ao atualizar o cliente'];
        }
      );
    } else {
      this.contasPagarService
        .cadastrarNovaContaAPagar(this.contaAPagar)
        .subscribe(
          (response) => {
            this.success = true;
            console.log(response);
            this.errors = null;
            this.contaAPagar = response; //mostra as infos
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
