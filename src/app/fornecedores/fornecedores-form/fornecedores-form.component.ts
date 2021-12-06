import { Router, ActivatedRoute } from '@angular/router';
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

    id? : any;  //id passado via parametro

    distritosBrasil : string[] = ['RO', 'AC', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN',
    'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF' ];

  constructor(private fornecedoresService : FornecedoresService,
              private router : Router,
              private activatedRouter : ActivatedRoute
              ) {
    this.fornecedor = new Fornecedor();
  }

  ngOnInit(): void {

         //seta o form com as infos do id passado via params
         let params = this.activatedRouter.params;
         params.forEach( value =>{
          if(value.id){
            this.id = value.id;
            this.fornecedoresService
            .getFornecedorById(this.id)
            .subscribe(
              response => this.fornecedor = response,
              errorResponse => this.fornecedor = new Fornecedor()
            )
          }
        });
  }

  onSubmit(){

    if(this.id){
      this.fornecedoresService.atualizarFornecedor(this.fornecedor).subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o fornecedor']
      })
    }
    else{
          this.fornecedoresService
                .salvarFornecedor(this.fornecedor)
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

  voltarParaListagem(){
    this.router.navigate( ['/fornecedores/lista']);
  }

}
