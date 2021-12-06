import { Router, ActivatedRoute } from '@angular/router';
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

  id? : any;  //id passado via parametro


  constructor(
    private servicoService : ServicosService,
    private router : Router,
    private activatedRouter : ActivatedRoute
    ) {
    this.servico = new Servico();
  }

  ngOnInit(): void {

    if(this.id){
      this.servicoService.atualizarServico(this.servico).subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o serviço']
      })
    }
    else {

      //seta o form com as infos do id passado via params
      let params = this.activatedRouter.params;
      params.forEach( value =>{
       if(value.id){
         this.id = value.id;
         this.servicoService
         .getServicosById(this.id)
         .subscribe(
           response => this.servico = response,
           errorResponse => this.servico = new Servico()
         )
       }
     });
    }

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

  voltarParaListagem(){
    this.router.navigate( ['/servicos/lista']);
  }

}
