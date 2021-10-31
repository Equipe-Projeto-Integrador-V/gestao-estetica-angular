import { AgendamentosService } from './../../agendamentos.service';
import { Component, OnInit } from '@angular/core';
import { AgendamentoBusca } from '../agendamento-busca';
import { Agendamento } from '../agendamento';

@Component({
  selector: 'app-agendamentos-lista',
  templateUrl: './agendamentos-lista.component.html',
  styleUrls: ['./agendamentos-lista.component.css']
})
export class AgendamentosListaComponent implements OnInit {


  nome? : string;
  mes? : number;
  meses : number[];
  agendamentoBuscaLista? : AgendamentoBusca[];
  message?: string | null;

  agendamentos? : AgendamentoBusca[];

  constructor( private agendamentoService : AgendamentosService) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
    this.agendamentoService.getClientes().subscribe( response => {
      this.agendamentoBuscaLista = response;
    })

  }

  consultar(){
    if(typeof this.nome == 'string' && this.mes){
      this.agendamentoService.buscar(this.nome, this.mes).subscribe( response => {
        this.agendamentoBuscaLista = response;
        if(this.agendamentoBuscaLista.length <= 0){ this.message = "Nenhum registro encontrado"} else {this.message= null}
      });
    }
  }

}
