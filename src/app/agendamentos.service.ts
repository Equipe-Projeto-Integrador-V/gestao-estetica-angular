import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Agendamento } from './agendamentos/agendamento';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendamentoBusca } from './agendamentos/agendamento-busca';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  apiURL : string = environment.apiURLbase + '/api/agendamentos'

  constructor( private http : HttpClient) { }

  salvar( agendamento : Agendamento) : Observable<Agendamento>{

    return this.http.post<Agendamento>(this.apiURL, agendamento);
  }

  buscar(nome : string, mes : number) : Observable<AgendamentoBusca[]>{

    const httpParams = new HttpParams().set('nome', nome).set('mes', mes.toString());

    const url = this.apiURL + '/?' + httpParams.toString();
    console.log(url);
    ///  /api/agendamentos/?nome=Testando&mes=1
    return this.http.get<any>(url);
  }

  getClientes() : Observable<AgendamentoBusca[]>{

    return this.http.get<AgendamentoBusca[]>(this.apiURL+'/listar');
  }
}
