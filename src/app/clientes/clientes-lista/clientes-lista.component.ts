import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes : Cliente[] = [];  //array de clientes, armazenar todos clientes vindos da api
  clienteSelecionado : Cliente;
  menssagemSucceso? : string;
  menssagemErro? : string;

  constructor( private clienteService : ClientesService, private router : Router) {

    this.clienteSelecionado = new Cliente();

  }

  ngOnInit(): void {
     this.clienteService
            .getClientes()
            .subscribe( response => this.clientes = response );
  }

  novoCadastro(){
    this.router.navigate( ['/clientes-form'] )
  }

  preparaDelecao( cliente : Cliente){

    this.clienteSelecionado = cliente;
  }

  deletarCliente(){

    this.clienteService
            .deletarCliente(this.clienteSelecionado)
            .subscribe( response => {
              this.menssagemSucceso = 'CLIENTE: '+ this.clienteSelecionado.nome + ' deletado com sucesso!!!'
              this.ngOnInit();
            },
                        erro => this.menssagemErro = 'Ocorreu um erro ao deletar o cliente!!!');
  }



}
