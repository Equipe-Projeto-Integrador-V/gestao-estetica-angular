import { Observable } from 'rxjs';
import { Funcionario } from './funcionarios/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor( private http : HttpClient) { }

  salvarCliente( funcionario : Funcionario ) : Observable<Funcionario>{
    return this.http.post<Funcionario>('http://localhost:8080/api/funcionarios', funcionario);
  }

  getFuncionarios() : Observable<Funcionario[]>{

    return this.http.get<Funcionario[]>('http://localhost:8080/api/funcionarios');
  }

  getFuncionarioById( id: number) : Observable<Funcionario>{

    return this.http.get<any>(`http://localhost:8080/api/funcionarios/${id}`);
  }
}
