import { Time } from "@angular/common";

export class Agendamento {

  id? : number;
  data? : Date;
  hora? : Time;
  observacao? : string;
  cliente? : number;
  funcionario? : number;
  servico? : number;

}
