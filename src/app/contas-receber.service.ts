import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContaAReceber } from './contas-receber/contas-receber.model';

@Injectable({
  providedIn: 'root',
})
export class ContasReceberService {
  apiURL: string = environment.apiURLbase + '/api/contasreceber';

  constructor(private http: HttpClient) {}

  consultarContaPeloId(conta: ContaAReceber): Observable<ContaAReceber> {
    return this.http.get(`${this.apiURL}/${conta.id}`);
  }

  getContasAReceber(): Observable<ContaAReceber[]> {
    return this.http.get<ContaAReceber[]>(this.apiURL);
  }

  excluirContaAReceber(conta: ContaAReceber): Observable<ContaAReceber> {
    return this.http.delete<ContaAReceber>(`${this.apiURL}/${conta.id}`);
  }

  cadastrarNovaContaAReceber(conta: ContaAReceber): Observable<ContaAReceber> {
    return this.http.post<ContaAReceber>(`${this.apiURL}`, conta);
  }

  atualizarContaAReceber(conta: ContaAReceber): Observable<ContaAReceber> {
    return this.http.put<ContaAReceber>(
      `${this.apiURL}/${conta.id}`,
      this.prepararModel(conta)
    );
  }

  prepararModel(conta: ContaAReceber): {} {
    return {
      id: conta.id,
      emissao: conta.emissao?.toLocaleDateString('en-US'),
      vencimento: conta.vencimento?.toLocaleDateString('en-US'),
      recebimento: conta.recebimento?.toLocaleDateString('en-US'),
      valor: conta.valor,
      valorRecebido: conta.valorRecebido,
      cliente: conta.cliente,
      ordemServico: conta.ordemServico,
      status: conta.status,
    };
  }
}
