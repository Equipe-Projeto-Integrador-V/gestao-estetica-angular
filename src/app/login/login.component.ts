import { Funcionario } from './../funcionarios/funcionario';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username! : string;
  password! : string;
  loginError?: boolean;
  menssagemSucesso? : string | null;
  errors: String[] = [];

  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.authService.tentarLogar(this.username, this.password).subscribe( response => {

      //transforma token em string
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token', access_token);   //armazena no local storage

      console.log(response)
      this.router.navigate(['/home'])
    }, erroResponse => {
      this.errors = ['Usuário e/ou senha incorreto(s)'];
    })


    console.log(`User ${this.username}, Pass:${this.password}`)
  }

  cadastrar(){
    const usuario :  Funcionario = new Funcionario();
    usuario.login = this.username;
    usuario.senha = this.password;
    this.authService.salvar(usuario).subscribe( response => {
        this.menssagemSucesso = 'Cadastro realizado com sucesso!!'
        this.loginError = false;
    }, errorResponse => {

      this.menssagemSucesso = null;
      this.errors = errorResponse.error.errors;
    })
  }

}
