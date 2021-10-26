import { Router } from '@angular/router';
import { ServicosService } from './../../servicos.service';
import { Servico } from './../servico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {

  servicos : Servico[] = []; //array de clientes, armazenar todos clientes vindos da api

  constructor( private servicoService : ServicosService,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.servicoService
          .getServicos()
          .subscribe( response => this.servicos = response );
  }

  novoCadastro(){
    this.router.navigate( ['/servicos-form'] )
  }

}
