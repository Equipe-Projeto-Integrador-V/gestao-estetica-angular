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





  constructor(private agendamentoService : AgendamentosService) {
    this.agendamentosHoje();
    this.agendamentosMes();

   }

  ngOnInit(): void {


  }


  graficoPizza(){

    this.data = {

      labels: ['Mês','Hoje'],
      datasets: [
          {
              data: [300, this.quantidadeAgendamentosHoje],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",

              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",

              ]
          }
      ]
  };
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

}
