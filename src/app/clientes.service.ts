import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient) { }


  salvarCliente( cliente : Cliente ) : Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }


  getClientes() : Observable<Cliente[]>{

    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }


  /*
  getClientes() : Cliente[]{

    let cliente : Cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Vladimir Putin'
    cliente.cpf = '53219793088';
    cliente.email = 'kgb@gmail.com'
    cliente.telefone = '32956387'
    cliente.uf = 'SP'

    return [cliente];
  }
  */
}
