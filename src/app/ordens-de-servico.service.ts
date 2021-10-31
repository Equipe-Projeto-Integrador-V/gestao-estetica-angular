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

}
