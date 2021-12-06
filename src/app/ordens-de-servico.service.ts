import { Status } from './home/status';
import { OrdemServicoLista } from './ordens-de-servico/ordemServicoLista';
import { OrdemServico } from './ordens-de-servico/ordemServico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdensDeServicoService {

  apiURL : string = environment.apiURLbase + '/api/ordemservicos'

  constructor( private http : HttpClient) { }

  salvar( ordemServico : OrdemServico) : Observable<OrdemServico>{

    return this.http.post<OrdemServico>(this.apiURL, ordemServico);
  }

  atualizarOrdemServico( ordemServico : OrdemServico ) : Observable<any>{
    return this.http.put<OrdemServico>(`${this.apiURL}/${ordemServico.id}`, ordemServico);
  }

  deletarOrdemServico(ordemServico : OrdemServico) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${ordemServico.id}`);
  }


  getOrdemServico() : Observable<OrdemServico[]>{

    return this.http.get<OrdemServico[]>(this.apiURL);
  }

  getTotalStatusOs(status : string) : Observable<Status>{
    return this.http.get<Status>(`${this.apiURL}/totalOsStatus?status=${status}`);
  }


  getOrdemServicoT() : Observable<OrdemServicoLista[]>{

    return this.http.get<OrdemServicoLista[]>(this.apiURL);
  }

  getOrdemServicoById( id: number) : Observable<OrdemServico>{

    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

}
