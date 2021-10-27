import { Router } from '@angular/router';
import { Funcionario } from './../funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/funcionarios.service';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.css']
})
export class FuncionariosListaComponent implements OnInit {

  funcionarios : Funcionario[] = []; //array de clientes, armazenar todos clientes vindos da api
  funcionarioSelecionado : Funcionario;

  constructor( private funcionarioService : FuncionariosService, private router : Router) {
    this.funcionarioSelecionado = new Funcionario();
  }

  ngOnInit(): void {

    this.funcionarioService
    .getFuncionarios()
    .subscribe( response => this.funcionarios = response );
  }


 novoCadastro(){
   this.router.navigate( ['/funcionarios-form'] )
 }

 preparaDelecao( funcionario : Funcionario ){
    this.funcionarioSelecionado = funcionario;
 }

}
