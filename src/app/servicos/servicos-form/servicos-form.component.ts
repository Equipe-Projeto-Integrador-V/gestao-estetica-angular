import { ServicosService } from './../../servicos.service';
import { Servico } from './../servico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-form',
  templateUrl: './servicos-form.component.html',
  styleUrls: ['./servicos-form.component.css']
})
export class ServicosFormComponent implements OnInit {


  servico : Servico;

  //requisição foi um sucesso
  success : boolean = false;

  //array responsavel por receber os erros do controller-advice no backend
  errors? : string[] | null;

  constructor( private servicoService : ServicosService) {
    this.servico = new Servico();
  }

  ngOnInit(): void {
  }

  onSubmit(){

    this.servicoService
          .salvarServico(this.servico)
          .subscribe( response => {
            this.success = true;
            console.log(response);
            this.errors = null;
            this.servico = response;
          }, errorResponse => {
            this.success=false;
            this.errors = errorResponse.error.errors;
            console.log(errorResponse.error.errors)
          })
  }

}
