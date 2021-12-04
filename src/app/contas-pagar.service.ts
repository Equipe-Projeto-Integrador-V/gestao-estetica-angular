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
    return this.http.post(this.apiURL, conta);
  }

  atualizarContaAPagar(conta: ContaAPagar): Observable<ContaAPagar> {
    return this.http.put(`${this.apiURL}/${conta.id}`, conta);
  }
}
