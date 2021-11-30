import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionarios/funcionario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiURL : string = environment.apiURLbase + '/api/funcionarios';
  tokenUrl: string = environment.apiURLbase + environment.obterTokenUrl;
  clientId : string = environment.clientId;
  clientSecret : string =  environment.clientSecret;

  jwtHelper : JwtHelperService = new JwtHelperService();

  constructor(private httpClient : HttpClient) {}

  encerrarSessao(){
    localStorage.removeItem('access_token');
  }

  getFuncionarioLogado(){
    const token = this.obterToken();
    if(token){
      const funcionarioLogado = this.jwtHelper.decodeToken(token).user_name
      return funcionarioLogado;
    }
    return null;
  }


  obterToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token;
    }
    return null;
  }

  isAuthenticatedAdmin(){
    const token = this.obterToken();
    const admin = this.jwtHelper.decodeToken(token).authorities
    return admin;
  }

  isAuthenticated() : boolean {
    const token = this.obterToken();
    if(token){
      const expirated = this.jwtHelper.isTokenExpired(token);
      return !expirated;
    }
    return false;
  }

  tentarLogar(username : string, password : string) : Observable<any>{

    //x-www-form-urlencoded
    const params  = new HttpParams()
                                   .set('username', username)
                                   .set('password', password)
                                   .set('grant_type', 'password');

    //func btoa codifica a string em base64
    const headers = {

      'Authorization' : 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    }

    return this.httpClient.post(this.tokenUrl, params.toString(), { headers })
  }


  //não utilizado ainda
  salvar(funcionario : Funcionario) : Observable<any>{
    return this.httpClient.post<any>(this.apiURL, funcionario);
  }
}
