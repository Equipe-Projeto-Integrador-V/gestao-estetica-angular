import { Router, ActivatedRoute } from '@angular/router';
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

  id? : any;  //id passado via parametro

  constructor(
    private clienteService : ClientesService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {

    //seta o form com as infos do id passado via params
    let params = this.activatedRoute.params;
    params.forEach( value =>{
     if(value.id){
       this.id = value.id;
       this.clienteService
       .getClienteById(this.id)
       .subscribe(
         response => this.cliente = response,
         errorResponse => this.cliente = new Cliente()
       )
     }
   });
  }

  onSubmit(){

    if(this.id){

      this.clienteService.atualizarCliente(this.cliente).subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente']
      })

    }else{

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

  }

  voltarParaListagem(){
    this.router.navigate( ['/clientes-lista']);
  }
}
