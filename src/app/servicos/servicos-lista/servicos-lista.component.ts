import { Router } from '@angular/router';
import { ServicosService } from './../../servicos.service';
import { Servico } from './../servico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {

  servicos : Servico[] = []; //array de clientes, armazenar todos clientes vindos da api
  servicoSelecionado : Servico;
  menssagemSucceso? : string;
  menssagemErro? : string;

  constructor( private servicoService : ServicosService,
    private router : Router
    ) {
      this.servicoSelecionado = new Servico();
    }

  ngOnInit(): void {

    this.servicoService
          .getServicos()
          .subscribe( response => this.servicos = response );
  }

  novoCadastro(){
    this.router.navigate( ['/servicos-form'] )
  }

  preparaDelecao( servico : Servico){

    this.servicoSelecionado = servico;
  }

  deletarServico(){

    this.servicoService
            .deletarServicos(this.servicoSelecionado)
            .subscribe( response => {
              this.menssagemSucceso = 'SERVIÇO: '+ this.servicoSelecionado.descricao + ' deletado com sucesso!!!'
              this.ngOnInit();
            },
                        erro => this.menssagemErro = 'Ocorreu um erro ao deletar o serviço!!!');
  }



}
