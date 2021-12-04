import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaAPagar } from './contas-pagar/contas-pagar.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContasPagarService {
  apiURL: string = environment.apiURLbase + '/api/contaspagar';

  constructor(private http: HttpClient) {}

  consultarContaPeloId(conta: ContaAPagar): Observable<ContaAPagar> {
    return this.http.get(`${this.apiURL}/${conta.id}`);
  }

  cadastrarNovaContaAPagar(conta: ContaAPagar): Observable<ContaAPagar> {
    return this.http.post(this.apiURL, this.prepararModel(conta));
  }

  atualizarContaAPagar(conta: ContaAPagar): Observable<ContaAPagar> {
    return this.http.put(
      `${this.apiURL}/${conta.id}`,
      this.prepararModel(conta)
    );
  }

  excluirContaAReceber(conta: ContaAPagar): Observable<ContaAPagar> {
    return this.http.delete<ContaAPagar>(`${this.apiURL}/${conta.id}`);
  }

  prepararModel(conta: ContaAPagar): {} {
    const options: Intl.DateTimeFormatOptions = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };

    return {
      id: conta.id,
      emissao: conta.emissao?.toLocaleDateString('en-US', options),
      vencimento: conta.vencimento?.toLocaleDateString('en-US', options),
      pagamento: conta.pagamento?.toLocaleDateString('en-US', options),
      valor: conta.valor,
      valorRecebido: conta.valorPago,
      status: conta.status,
      fornecedor: conta.fornecedor?.id,
    };
  }
}
