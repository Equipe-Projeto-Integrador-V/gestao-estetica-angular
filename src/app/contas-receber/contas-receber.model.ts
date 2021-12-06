import { Cliente } from '../clientes/cliente';
import { OrdemServico } from '../ordens-de-servico/ordemServico';

export class ContaAReceber {
  id?: number;
  emissao?: Date;
  vencimento?: Date;
  valor?: number;
  valorRecebido?: number;
  recebimento?: Date;
  status?: string;
  ordemServico?: OrdemServico;
  cliente?: Cliente;
}
