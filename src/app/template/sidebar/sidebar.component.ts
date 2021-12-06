import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  adminOrRole = this.authService.isAuthenticatedAdmin();

  ativarAbaFuncionario? : boolean;

  funcionarioLogado? : string;

  constructor( private authService : AuthService, private router: Router) { }

  ngOnInit(): void {


    this.funcionarioLogado = this.authService.getFuncionarioLogado();
    this.desativarFuncionario();
    console.log(this.ativarAbaFuncionario)
    console.log(this.adminOrRole[0])
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

  desativarFuncionario(){



    if(this.adminOrRole[0] === 'ROLE_USER'){
      this.ativarAbaFuncionario = true;
    } else {
      this.ativarAbaFuncionario = false;
    }

    //console.log(this.auth.isAuthenticatedAdmin());
  }

}
