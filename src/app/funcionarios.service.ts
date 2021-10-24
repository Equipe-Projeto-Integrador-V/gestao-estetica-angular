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
}
