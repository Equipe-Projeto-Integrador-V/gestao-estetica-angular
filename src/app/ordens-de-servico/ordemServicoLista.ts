import { Funcionario } from './../funcionarios/funcionario';
import { Agendamento } from './../agendamentos/agendamento';
import { Time } from "@angular/common";

export class OrdemServicoLista{

  id? : number;
  dataInicio? : Date;
  dataFinal? : Date;
  horaInicio? : Time;
  horaFinal? : Time;
  status? : string;
  valor? : number;
  agendamento? : Agendamento;
  funcionarioOs? : Funcionario;
  funcionarioExec? : Funcionario;
}
