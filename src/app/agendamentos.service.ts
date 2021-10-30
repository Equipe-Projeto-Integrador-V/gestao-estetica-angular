import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Agendamento } from './agendamentos/agendamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  apiURL : string = environment.apiURLbase + '/api/agendamentos'

  constructor( private http : HttpClient) { }

  salvar( agendamento : Agendamento) : Observable<Agendamento>{

    return this.http.post<Agendamento>(this.apiURL, agendamento);
  }
}
