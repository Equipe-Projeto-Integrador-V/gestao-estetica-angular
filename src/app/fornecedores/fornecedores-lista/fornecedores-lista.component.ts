import { Router } from '@angular/router';
import { FornecedoresService } from './../../fornecedores.service';
import { Fornecedor } from './../fornecedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores-lista',
  templateUrl: './fornecedores-lista.component.html',
  styleUrls: ['./fornecedores-lista.component.css']
})
export class FornecedoresListaComponent implements OnInit {

  fornecedores : Fornecedor[] = []; //array de clientes, armazenar todos clientes vindos da api
  fornecedorSelecionado : Fornecedor;
  menssagemSucceso? : string;
  menssagemErro? : string;

  constructor( private fornecedoresService : FornecedoresService,
               private router : Router
               ) {
                 this.fornecedorSelecionado = new Fornecedor();
               }

  ngOnInit(): void {

    this.fornecedoresService
    .getFornecedores()
    .subscribe( response => this.fornecedores = response );
  }

  novoCadastro(){
    this.router.navigate( ['/fornecedores-form'] )
  }

  preparaDelecao( fornecedor : Fornecedor){

    this.fornecedorSelecionado = fornecedor;
  }

  deletarFornecedor(){

    this.fornecedoresService
            .deletarServicos(this.fornecedorSelecionado)
            .subscribe( response => {
              this.menssagemSucceso = 'FORNECEDOR: '+ this.fornecedorSelecionado.nome + ' deletado com sucesso!!!'
              this.ngOnInit();
            },
                        erro => this.menssagemErro = 'Ocorreu um erro ao deletar o fornecedor!!!');
  }



}
