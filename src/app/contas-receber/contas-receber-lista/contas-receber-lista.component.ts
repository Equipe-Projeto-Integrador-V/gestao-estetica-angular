import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContasReceber } from '../contas-receber.model';
import { ContasReceberService } from '../../contas-receber.service';

@Component({
  selector: 'app-contas-receber-lista',
  templateUrl: './contas-receber-lista.component.html',
  styleUrls: ['./contas-receber-lista.component.css']
})
export class ContasReceberListaComponent implements OnInit {

  menssagemErro? : string;
  menssagemSucceso? : string;
  contasReceber? : ContasReceber[];
  contaReceberSelecionada: ContasReceber;

  constructor(private contasPagarService : ContasReceberService, private router : Router) {
    this.contaReceberSelecionada = new ContasReceber();
   }

  ngOnInit(): void {
    this.contasPagarService
            .getContasReceber()
            .subscribe( response => this.contasReceber = response );

            
  }

  novoCadastro() {
    
  }

  preparaDelecao(c : ContasReceber) {

  }


  deletarContaReceber() {

  }
}
