import { FuncionariosService } from 'src/app/funcionarios.service';
import { AgendamentosService } from './../../agendamentos.service';
import { Funcionario } from './../../funcionarios/funcionario';
import { Agendamento } from './../../agendamentos/agendamento';
import { Component, OnInit } from '@angular/core';
import { OrdemServico } from '../ordemServico';

@Component({
  selector: 'app-ordens-de-servico-form',
  templateUrl: './ordens-de-servico-form.component.html',
  styleUrls: ['./ordens-de-servico-form.component.css']
})
export class OrdensDeServicoFormComponent implements OnInit {

  agendamentos? : Agendamento[];
  funcionarios? : Funcionario[];

  ordemServico : OrdemServico;

  constructor( private agendamentoService : AgendamentosService,
               private funcionarioService : FuncionariosService) {

    this.ordemServico = new OrdemServico();
  }

  ngOnInit(): void {

    //this.agendamentoService

    this.funcionarioService.getFuncionarios().subscribe( response => this.funcionarios = response );
  }

  onSubmit(){}

}
