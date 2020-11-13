import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos.service'
import {SuporteService } from '../suporte.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: any;
  constructor( public router: Router, public authService: AuthService,private formBuilder: FormBuilder,public suporte:SuporteService) { }

  ngOnInit(): void {
    
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }


 login(){
  const objLogin = this.formLogin.value;
  this.authService.authUsuario(objLogin).subscribe((usuarioLogado) => {
     console.log(usuarioLogado)
      localStorage.setItem('userLogged', JSON.stringify(usuarioLogado.data));
     this.router.navigate(['painel']);
  },(error) => {
    this.suporte.showMessageErro('E-mail e/ou senha inválidos')
  })

 }

}
