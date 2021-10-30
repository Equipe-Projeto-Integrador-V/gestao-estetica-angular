import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionarios/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  apiURL : string = environment.apiURLbase + '/api/funcionarios'

  constructor( private http : HttpClient) { }

  salvarCliente( funcionario : Funcionario ) : Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.apiURL}`, funcionario);
  }

  atualizarFuncionario( funcionario : Funcionario ) : Observable<any>{
    return this.http.put<Funcionario>(`${this.apiURL}/${funcionario.id}`, funcionario);
  }

  deletarFuncionario(funcionario : Funcionario) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${funcionario.id}`);
  }

  getFuncionarios() : Observable<Funcionario[]>{

    return this.http.get<Funcionario[]>(this.apiURL);
  }

  getFuncionarioById( id: number) : Observable<Funcionario>{

    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
}
