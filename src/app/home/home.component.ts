import { StatusEnum } from './../enums/status-enum';
import { Status } from './status';
import { OrdensDeServicoService } from 'src/app/ordens-de-servico.service';
import { AgendamentosService } from './../agendamentos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  dataHoje = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  mesHoje = new Date().getMonth();

  data: any;
  chartOptions: any;
  subscription?: Subscription;
  quantidadeAgendamentosHoje : any;
  quantidadeAgendamentosMes : any;
  totalStatusOs? : string;
  status? : Status;



  constructor(private agendamentoService : AgendamentosService, private ordemServicoService : OrdensDeServicoService) {
    this.agendamentosHoje();
    this.agendamentosMes();
    this.totalOrdemServicoPorStatus(StatusEnum.ABERTO);

   }

  ngOnInit(): void {
  }



  agendamentosHoje(){
    this.agendamentoService.buscarQuantidadeHoje().subscribe( response => {
      this.quantidadeAgendamentosHoje = response;
      });
  }


  agendamentosMes(){
    this.agendamentoService.buscarQuantidadeMes().subscribe( response => {
      this.quantidadeAgendamentosMes = response;
      });
  }

  totalOrdemServicoPorStatus(status : string){

      this.ordemServicoService.getTotalStatusOs(status).subscribe( response => {this.status = response; console.log(this.status)});
    }




}
