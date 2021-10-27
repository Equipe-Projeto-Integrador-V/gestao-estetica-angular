import { Router, ActivatedRoute } from '@angular/router';
import { FuncionariosService } from './../../funcionarios.service';
import { Funcionario } from './../funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  funcionario : Funcionario;

   //requisição foi um sucesso
   success : boolean = false;

   //array responsavel por receber os erros do controller-advice no backend
   errors? : string[] | null;

   id? : any;  //id passado via parametro

  constructor(
    private funcionarioService : FuncionariosService,
    private router : Router,
    private activatedRouter : ActivatedRoute
    ) {
    this.funcionario = new Funcionario();
  }

  ngOnInit(): void {

     //seta o form com as infos do id passado via params
     let params = this.activatedRouter.params;
     params.forEach( value =>{
      if(value.id){
        this.id = value.id;
        this.funcionarioService
        .getFuncionarioById(this.id)
        .subscribe(
          response => this.funcionario = response,
          errorResponse => this.funcionario = new Funcionario()
        )
      }
    });
  }

  onSubmit(){

    if(this.id){
      this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o funcionario']
      })
    }
    else{
    this.funcionarioService
          .salvarCliente(this.funcionario)
          .subscribe( response => {
            this.success = true;
            console.log(response);
            this.errors = null;
            this.funcionario = response;
          }, errorResponse => {
            this.success=false;
            this.errors = errorResponse.error.errors;
            console.log(errorResponse.error.errors);

          })
          }
  }

  voltarParaListagem(){
    this.router.navigate( ['/funcionarios-lista']);
  }


  mostrarSenhar(){
    var x = <HTMLInputElement>document.getElementById("minhaSenha");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  }

}
