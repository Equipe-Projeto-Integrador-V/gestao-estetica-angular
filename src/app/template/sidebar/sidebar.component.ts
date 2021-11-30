import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  ativarAbaFuncionario? : boolean;

  funcionarioLogado? : string;

  constructor( private authService : AuthService, private router: Router) { }

  ngOnInit(): void {


    this.funcionarioLogado = this.authService.getFuncionarioLogado();
    this.desativarFuncionario();
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

  desativarFuncionario(){
    if(this.authService.isAuthenticatedAdmin() === 'ROLE_USER'){
      this.ativarAbaFuncionario = true;
    } else {
      this.ativarAbaFuncionario = false;
    }

    //console.log(this.auth.isAuthenticatedAdmin());
  }

}
