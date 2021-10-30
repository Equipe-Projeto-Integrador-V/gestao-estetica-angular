import { environment } from 'src/environments/environment';
import { Servico } from './servicos/servico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  apiURL : string = environment.apiURLbase + '/api/servicos'

  constructor( private http : HttpClient ) { }

  salvarServico( servico : Servico ) : Observable<Servico>{
    return this.http.post<Servico>(`${this.apiURL}`, servico);
  }

  atualizarServico( servico : Servico ) : Observable<any>{
    return this.http.put<Servico>(`${this.apiURL}/${servico.id}`, servico);
  }

  deletarServicos(servico : Servico) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${servico.id}`);
  }

  getServicos() : Observable<Servico[]>{

    return this.http.get<Servico[]>(this.apiURL);
  }

  getServicosById( id: number) : Observable<Servico>{

    return this.http.get<any>(`${this.apiURL}/${id}`);
  }


}
