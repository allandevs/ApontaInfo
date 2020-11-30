import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroComponent } from  './cadastro/cadastro.component'
import { LoginComponent } from './login/login.component'
import { PainelComponent } from './empresa/painel/painel.component'
import { FuncionaComponent } from './funciona/funciona.component'
import { ComputadoresComponent } from './categorias/computadores/computadores.component'
import { ConteudoComponent } from './conteudo/conteudo.component'
import { CelularesComponent } from './categorias/celulares/celulares.component'
import { GamesComponent } from './categorias/games/games.component'
import { CamerasComponent} from './categorias/cameras/cameras.component'
import { SomComponent } from './categorias/som/som.component'
import { PainelAdminComponent } from './admin/painel-admin/painel-admin.component'
import { UsuariosComponent } from './admin/usuarios/usuarios.component'
import { AuthGuardGuard  } from './auth-guard.guard'
import { BuscaComponent } from './busca/busca.component';
 
// const routes: Routes = [];


const ROUTES: Routes = [
  
{ path:'cadastro', component: CadastroComponent },
{ path:'login', component: LoginComponent},
{ path: 'painel', component: PainelComponent, canActivate: [AuthGuardGuard] },
{ path: 'funciona', component: FuncionaComponent },

{ path: 'admin', 
component: PainelAdminComponent, canActivate: [AuthGuardGuard],
children:[
  {path: 'usuarios', component: UsuariosComponent}
],

},

{
   path:'',
    component: HomeComponent,
    children: [
      { path: '', component: ConteudoComponent },
      { path: 'computadores', component: ComputadoresComponent },
      { path: 'celulares', component: CelularesComponent },
      { path: 'games', component: GamesComponent },
      { path: 'cameras', component: CamerasComponent },
      { path: 'som', component: SomComponent },
      { path: 'busca/:filtro', component: BuscaComponent}

    ],
     
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES,{ useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }




// path:'',
// component: HomeComponent,
// children: [
  
// ],
 
// },
