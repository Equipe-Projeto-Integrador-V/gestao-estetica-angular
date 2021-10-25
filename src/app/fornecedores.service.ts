import { Fornecedor } from './fornecedores/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor( private http : HttpClient) { }

  salvarServico( fornecedor : Fornecedor ) : Observable<Fornecedor>{
    return this.http.post<Fornecedor>('http://localhost:8080/api/fornecedores', fornecedor);
  }
}
