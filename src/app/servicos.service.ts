import { Servico } from './servicos/servico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor( private http : HttpClient ) { }

  salvarServico( servico : Servico ) : Observable<Servico>{
    return this.http.post<Servico>('http://localhost:8080/api/servicos', servico);
  }

  atualizarServico( servico : Servico ) : Observable<any>{
    return this.http.put<Servico>(`http://localhost:8080/api/servicos/${servico.id}`, servico);
  }

  deletarServicos(servico : Servico) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/servicos/${servico.id}`);
  }

  getServicos() : Observable<Servico[]>{

    return this.http.get<Servico[]>('http://localhost:8080/api/servicos');
  }

  getServicosById( id: number) : Observable<Servico>{

    return this.http.get<any>(`http://localhost:8080/api/servicos/${id}`);
  }


}
