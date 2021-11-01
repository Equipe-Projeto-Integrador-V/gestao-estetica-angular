import { OrdensDeServicoService } from './../../ordens-de-servico.service';
import { OrdemServicoLista } from './../ordemServicoLista';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdemServico } from './../ordemServico';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-ordens-de-servico-lista',
  templateUrl: './ordens-de-servico-lista.component.html',
  styleUrls: ['./ordens-de-servico-lista.component.css']
})
export class OrdensDeServicoListaComponent implements OnInit {

  menssagemSucceso? : string;
  menssagemErro? : string;
  ordensDeServico? : OrdemServicoLista[];
  //ordensDeServico? : OrdemServico[];
  ordemServicoSelecionado? : OrdemServico;

  constructor(private router : Router, private ordemServicoService : OrdensDeServicoService) { }

  ngOnInit(): void {

    this.ordemServicoService.getOrdemServicoT().subscribe( response => this.ordensDeServico = response)
  }

  novoCadastro(){

    this.router.navigate( ['/ordens-de-servicos-form'] )
  }

  preparaDelecao(ordemServico : OrdemServicoLista){
  }

  deletarOrdemServico(){}

}
