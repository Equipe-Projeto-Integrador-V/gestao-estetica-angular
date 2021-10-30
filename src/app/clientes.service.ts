import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL :  string = environment.apiURLbase + '/api/clientes';

  constructor( private http : HttpClient) { }


  salvarCliente( cliente : Cliente ) : Observable<Cliente>{
    return this.http.post<Cliente>( `${this.apiURL}`, cliente);
  }

  atualizarCliente( cliente : Cliente ) : Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deletarCliente(cliente : Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }


  getClientes() : Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById( id: number) : Observable<Cliente>{

    return this.http.get<any>(`${this.apiURL}/${id}`);
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
