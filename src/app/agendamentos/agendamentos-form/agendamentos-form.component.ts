import { AgendamentosService } from './../../agendamentos.service';
import { Agendamento } from './../agendamento';
import { ServicosService } from './../../servicos.service';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { ClientesService } from './../../clientes.service';
import { Servico } from './../../servicos/servico';
import { Funcionario } from './../../funcionarios/funcionario';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-form',
  templateUrl: './agendamentos-form.component.html',
  styleUrls: ['./agendamentos-form.component.css']
})
export class AgendamentosFormComponent implements OnInit {


  clientes? : Cliente[];
  funcionarios? : Funcionario[];
  servicos? : Servico[];

  agendamento : Agendamento;

    //requisição foi um sucesso
    success : boolean = false;

    //array responsavel por receber os erros do controller-advice no backend
    errors? : string[] | null;

  constructor(
                private clienteService : ClientesService,
                private funcionarioService : FuncionariosService,
                private servicoService : ServicosService,
                private servicoAgendamento : AgendamentosService) {

                  this.agendamento = new Agendamento();


  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe( response => this.clientes = response );
    this.funcionarioService.getFuncionarios().subscribe( response => this.funcionarios = response);
    this.servicoService.getServicos().subscribe( response => this.servicos = response );

  }


  onSubmit(){
    //console.log(this.agendamento);

    this.servicoAgendamento.salvar(this.agendamento)
    .subscribe( response => {
      this.success = true;
      console.log(response);
      this.errors = null;
      this.agendamento = new Agendamento(); //apos cadastrar, ele limpa o formulario
      this.agendamento = response; //mostra as infos
    }, errorResponse => {
      this.success=false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors)
    })
  }

}
