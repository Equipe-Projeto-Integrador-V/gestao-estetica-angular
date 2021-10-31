import { Servico } from './../servicos/servico';
import { Funcionario } from './../funcionarios/funcionario';
import { Cliente } from './../clientes/cliente';
import { Time } from '@angular/common';
export class AgendamentoBusca{

  data? : Date;
  hora? : Time;
  observacao? : string;
  cliente! : Cliente;
  funcionario! : Funcionario;
  servico! : Servico;

}
