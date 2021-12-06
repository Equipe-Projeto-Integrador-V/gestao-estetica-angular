import { Fornecedor } from "../fornecedores/fornecedor";

export class ContaAPagar {
    id?: number;
    emissao?: Date;
    vencimento?: Date;
    valor?: number;
    valorPago?: number;
    pagamento?: Date;
    status?: string;
    fornecedor?: Fornecedor;
}
