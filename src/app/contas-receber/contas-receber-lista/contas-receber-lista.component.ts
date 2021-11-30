import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaAReceber } from '../contas-receber.model';
import { ContasReceberService } from '../../contas-receber.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-contas-receber-lista',
  templateUrl: './contas-receber-lista.component.html',
  styleUrls: ['./contas-receber-lista.component.css'],
})
export class ContasReceberListaComponent implements OnInit {
  menssagemErro?: string;
  menssagemSucceso?: string;
  contasReceber?: ContaAReceber[];
  contaReceberSelecionada: ContaAReceber;

  constructor(
    private contasPagarService: ContasReceberService,
    private router: Router
  ) {
    this.contaReceberSelecionada = new ContaAReceber();
  }

  ngOnInit(): void {
    this.contasPagarService.getContasAReceber().subscribe((response) => {
      this.contasReceber = response.sort(function (
        a: ContaAReceber,
        b: ContaAReceber
      ) {
        if (a.id && b.id) {
          console.log(a.id, b.id);
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
        }
        return 0;
      });
    });
  }

  novoCadastro() {
    this.router.navigate(['/contas-receber/form']);
  }

  preparaDelecao(c: ContaAReceber) {
    this.contaReceberSelecionada = c;
  }

  deletarContaReceber() {
    this.contasPagarService
      .excluirContaAReceber(this.contaReceberSelecionada)
      .subscribe(
        (response) => {
          this.menssagemSucceso =
            'CLIENTE: ' +
            this.contaReceberSelecionada.id +
            ' excluída com sucesso!!!';
          this.ngOnInit();
        },
        (erro) => (this.menssagemErro = 'Ocorreu um erro ao excluir a conta!!!')
      );
  }
}
