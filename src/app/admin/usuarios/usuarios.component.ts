import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service'
import {SuporteService } from '../../suporte.service'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
 public usuarios
 public usuariosInativos
 public usuariosAtivos
  constructor( private suporte: SuporteService,public sevUsuario: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios()
    this.getUsuariosInativos()
    this.getUsuariosAtivos()
  }


  getUsuarios(){
    this.sevUsuario.getUsuarios().subscribe((result) =>{
   this.usuarios = result
   console.log(this.usuarios)
    })
  }
  
  getUsuariosInativos(){
    this.sevUsuario.getUsuariosInativos().subscribe((result) =>{
      this.usuariosInativos = result
      console.log(this.usuariosInativos)
       })
  }

    
  getUsuariosAtivos(){
    this.sevUsuario.getUsuariosAtivos().subscribe((result) =>{
      this.usuariosAtivos = result
      console.log(this.usuariosInativos)
       })
  }

  statusCliente(usuario){
    if(usuario.active){
     const obj = {
       active: false
     }
     this.sevUsuario.statusCliente(usuario._id,obj).subscribe((res: any)=> {
       this.getUsuarios()
       this.getUsuariosInativos()
       this.getUsuariosAtivos()
       this.suporte.showMessage('Cliente desabilitado com sucesso!')
     })
   }
     if(usuario.active == false){
       const obj = {
         active: true
       }
       this.sevUsuario.statusCliente(usuario._id,obj).subscribe((res: any)=> {
         this.getUsuarios()
         this.getUsuariosInativos()
         this.getUsuariosAtivos()
         this.suporte.showMessage('Cliente ativado com sucesso!')
       })
    }
 
   
  } 

}
