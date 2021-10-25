import { Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente : Cliente;

  //requisição foi um sucesso
  success : boolean = false;

  //array responsavel por receber os erros do controller-advice no backend
  errors? : string[] | null;

  constructor( private clienteService : ClientesService, private router : Router ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    //console.log(this.cliente.nome)
  }

  onSubmit(){

    //subscribe recebe callback, sendo um o success e outro de failure
    this.clienteService
          .salvarCliente(this.cliente)
          .subscribe( response => {
            this.success = true;
            console.log(response);
            this.errors = null;
            this.cliente = response; //mostra as infos
          }, errorResponse => {
            this.success=false;
            this.errors = errorResponse.error.errors;
            console.log(errorResponse.error.errors)
          })
  }

  voltarParaListagem(){
    this.router.navigate( ['/clientes-lista']);
  }
}
