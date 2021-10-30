import { environment } from 'src/environments/environment';
import { Fornecedor } from './fornecedores/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  apiURL : string = environment.apiURLbase + '/api/fornecedores'

  constructor( private http : HttpClient) { }

  salvarFornecedor( fornecedor : Fornecedor ) : Observable<Fornecedor>{
    return this.http.post<Fornecedor>(`${this.apiURL}`, fornecedor);
  }

  atualizarFornecedor( fornecedor : Fornecedor ) : Observable<any>{
    return this.http.put<Fornecedor>(`${this.apiURL}/${fornecedor.id}`, fornecedor);
  }

  deletarServicos(fornecedor : Fornecedor) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${fornecedor.id}`);
  }

  getFornecedores() : Observable<Fornecedor[]>{

    return this.http.get<Fornecedor[]>(this.apiURL);
  }

  getFornecedorById( id: number) : Observable<Fornecedor>{

    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
}
