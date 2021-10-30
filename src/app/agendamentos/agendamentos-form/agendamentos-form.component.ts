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
                                      console.log(response);
                              })
  }

}
