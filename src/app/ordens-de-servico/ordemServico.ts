import { Time } from '@angular/common';
export class OrdemServico {

  id? : number;
  dataInicio? : Date;
  dataFinal? : Date;
  horaInicio? : Time;
  horaFinal? : Time;
  status? : string;
  valor? : number;
  agendamento? : number;
  funcionarioOs? : number;
  funcionarioExec? : number;


}
