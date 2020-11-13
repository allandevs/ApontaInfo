import { CadastroUserService } from './../cadastro-user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SuporteService } from '../suporte.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formCadastro : FormGroup;
  constructor(private formBuilder: FormBuilder, public cadastroUser: CadastroUserService,private suporte: SuporteService,public router: Router) { }

  ngOnInit(): void {
    this.iniciarFormProdutos()
  }


  iniciarFormProdutos() {
    this.formCadastro = this.formBuilder.group({
      name: ['',Validators.required],
      nameFantasia: ['',Validators.required],
      cnpj: ['', Validators.required],
      endereco: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro:[, Validators.required],
      cidade: ['',Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      password:[, Validators.required],

    });
  }

  cadastrar(){
   this.cadastroUser.cadastrarEmpresa(this.formCadastro.value).subscribe(

     (result :any ) =>{
      this.suporte.showMessage('Parabéns cadastrado realizado com sucesso!')
      this.router.navigate(['login']);
   })
  }

}
