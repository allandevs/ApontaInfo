import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroComponent } from  './cadastro/cadastro.component'
import { LoginComponent } from './login/login.component'
import { PainelComponent } from './empresa/painel/painel.component'
import { FuncionaComponent } from './funciona/funciona.component'

// const routes: Routes = [];


const ROUTES: Routes = [
{ path:'cadastro', component: CadastroComponent },
{ path:'login', component: LoginComponent },
{ path: 'painel', component: PainelComponent },
{ path: 'funciona', component: FuncionaComponent },
{
   path:'',
    component: HomeComponent,
    children: [
      
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
