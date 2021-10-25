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
}
