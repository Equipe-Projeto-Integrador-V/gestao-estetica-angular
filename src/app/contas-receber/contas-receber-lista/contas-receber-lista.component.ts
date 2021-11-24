import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-receber-lista',
  templateUrl: './contas-receber-lista.component.html',
  styleUrls: ['./contas-receber-lista.component.css']
})
export class ContasReceberListaComponent implements OnInit {

  menssagemErro? : string;
  menssagemSucceso? : string;

  constructor() { }

  ngOnInit(): void {
  }

  novoCadastro() {
    
  }
}
