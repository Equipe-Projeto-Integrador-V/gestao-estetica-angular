import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContasPagarService } from 'src/app/contas-pagar.service';
import { ContaAPagar } from '../contas-pagar.model';


@Component({
  selector: 'app-contas-pagar-lista',
  templateUrl: './contas-pagar-lista.component.html',
  styleUrls: ['./contas-pagar-lista.component.css']
})
export class ContasPagarListaComponent implements OnInit {
  menssagemErro?: string;
  menssagemSucceso?: string;
  contasPagar?: ContaAPagar[];
  contaPagarSelecionada: ContaAPagar;

  constructor(
    private contasPagarService: ContasPagarService,
    private router: Router
  ) {
    this.contaPagarSelecionada = new ContaAPagar();
  }

  ngOnInit(): void {
    this.contasPagarService.getContasAPagar().subscribe((response) => {
      this.contasPagar = response.sort(function (
        a: ContaAPagar,
        b: ContaAPagar
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
    this.router.navigate(['/contas-pagar/form']);
  }

  preparaDelecao(c: ContaAPagar) {
    this.contaPagarSelecionada = c;
  }

  deletarContaPagar() {
    this.contasPagarService
      .excluirContaAPagar(this.contaPagarSelecionada)
      .subscribe(
        (response) => {
          this.menssagemSucceso =
            'CLIENTE: ' +
            this.contaPagarSelecionada.id +
            ' excluída com sucesso!!!';
          this.ngOnInit();
        },
        (erro) => (this.menssagemErro = 'Ocorreu um erro ao excluir a conta!!!')
      );
  }
}