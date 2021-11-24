import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContasReceber } from './contas-receber/contas-receber.model';

@Injectable({
  providedIn: 'root',
})
export class ContasReceberService {
  apiURL: string = environment.apiURLbase + '/api/contasreceber';

  constructor(private http: HttpClient) {}

  getContasReceber(): Observable<ContasReceber[]> {
    return this.http.get<ContasReceber[]>(this.apiURL);
  }

  excluirContaReceber(conta: ContasReceber): Observable<ContasReceber> {
    return this.http.delete<any>(`${this.apiURL}/${conta.id}`);
  }
}
