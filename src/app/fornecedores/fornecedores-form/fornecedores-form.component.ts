import { FornecedoresService } from './../../fornecedores.service';
import { Fornecedor } from './../fornecedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores-form',
  templateUrl: './fornecedores-form.component.html',
  styleUrls: ['./fornecedores-form.component.css']
})
export class FornecedoresFormComponent implements OnInit {


  fornecedor : Fornecedor;

    //requisição foi um sucesso
    success : boolean = false;

    //array responsavel por receber os erros do controller-advice no backend
    errors? : string[] | null;

  constructor(private fornecedoresService : FornecedoresService) {
    this.fornecedor = new Fornecedor();
  }

  ngOnInit(): void {
  }

  onSubmit(){

    this.fornecedoresService
          .salvarServico(this.fornecedor)
          .subscribe( response => {
            this.success = true;
            console.log(response);
            this.errors = null;
            this.fornecedor = response;
          }, errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
            console.log(errorResponse.error.errors)
          })
  }

}
