import { OrdensDeServicoService } from './../../ordens-de-servico.service';
import { AgendamentoBusca } from './../../agendamentos/agendamento-busca';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { AgendamentosService } from './../../agendamentos.service';
import { Funcionario } from './../../funcionarios/funcionario';
import { Agendamento } from './../../agendamentos/agendamento';
import { Component, OnInit } from '@angular/core';
import { OrdemServico } from '../ordemServico';

@Component({
  selector: 'app-ordens-de-servico-form',
  templateUrl: './ordens-de-servico-form.component.html',
  styleUrls: ['./ordens-de-servico-form.component.css']
})
export class OrdensDeServicoFormComponent implements OnInit {

  agendamentos? : AgendamentoBusca[];
  funcionarios? : Funcionario[];
  ordemServico : OrdemServico;

    //requisição foi um sucesso
    success : boolean = false;

    //array responsavel por receber os erros do controller-advice no backend
    errors? : string[] | null;

    id? : any;  //id passado via parametro

  constructor( private agendamentoService : AgendamentosService,
               private funcionarioService : FuncionariosService,
               private router : Router,
               private activatedRouter : ActivatedRoute,
               private ordemServicoService : OrdensDeServicoService) {

    this.ordemServico = new OrdemServico();
  }

  ngOnInit(): void {

    //this.agendamentoService
    this.agendamentoService.getClientes().subscribe( response => this.agendamentos = response );
    this.funcionarioService.getFuncionarios().subscribe( response => this.funcionarios = response );

    //seta o form com as infos do id passado via params
    let params = this.activatedRouter.params;
    params.forEach( value =>{
     if(value.id){
       this.id = value.id;
       this.ordemServicoService
       .getOrdemServicoById(this.id)
       .subscribe(
         response => this.ordemServico = response,
         errorResponse => this.ordemServico = new OrdemServico()
       )
     }
   });


  }

  onSubmit(){
    if(this.id){

      this.ordemServicoService.atualizarOrdemServico(this.ordemServico).subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente']
      })

    }else{

      //subscribe recebe callback, sendo um o success e outro de failure
      this.ordemServicoService
            .salvar(this.ordemServico)
            .subscribe( response => {
              this.success = true;
              console.log(response);
              this.errors = null;
              this.ordemServico = response; //mostra as infos
            }, errorResponse => {
              this.success=false;
              this.errors = errorResponse.error.errors;
              console.log(errorResponse.error.errors)
            })
    }
  }

  voltarParaListagem(){
    this.router.navigate( ['/ordens-de-servicos-lista']);
  }

}
