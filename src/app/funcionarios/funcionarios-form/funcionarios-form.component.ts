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

  constructor(private funcionarioService : FuncionariosService) {
    this.funcionario = new Funcionario();
  }

  ngOnInit(): void {
  }

  onSubmit(){
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
