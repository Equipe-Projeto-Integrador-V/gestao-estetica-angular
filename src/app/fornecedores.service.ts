import { Fornecedor } from './fornecedores/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor( private http : HttpClient) { }

  salvarFornecedor( fornecedor : Fornecedor ) : Observable<Fornecedor>{
    return this.http.post<Fornecedor>('http://localhost:8080/api/fornecedores', fornecedor);
  }

  atualizarFornecedor( fornecedor : Fornecedor ) : Observable<any>{
    return this.http.put<Fornecedor>(`http://localhost:8080/api/fornecedores/${fornecedor.id}`, fornecedor);
  }

  deletarServicos(fornecedor : Fornecedor) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/fornecedores/${fornecedor.id}`);
  }

  getFornecedores() : Observable<Fornecedor[]>{

    return this.http.get<Fornecedor[]>('http://localhost:8080/api/fornecedores');
  }

  getFornecedorById( id: number) : Observable<Fornecedor>{

    return this.http.get<any>(`http://localhost:8080/api/fornecedores/${id}`);
  }
}
