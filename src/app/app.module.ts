import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './empresa/painel/painel.component';
import { HeaderComponent } from './header/header.component';
import { FuncionaComponent } from './funciona/funciona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputadoresComponent } from './categorias/computadores/computadores.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CelularesComponent } from './categorias/celulares/celulares.component';
import { GamesComponent } from './categorias/games/games.component';
import { CamerasComponent } from './categorias/cameras/cameras.component';
import { SomComponent } from './categorias/som/som.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    BannerComponent,
    CadastroComponent,
    LoginComponent,
    PainelComponent,
    HeaderComponent,
    FuncionaComponent,
    ComputadoresComponent,
    ConteudoComponent,
    CelularesComponent,
    GamesComponent,
    CamerasComponent,
    SomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
