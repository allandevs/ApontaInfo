import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service'
import {SuporteService } from '../../suporte.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
 public usuarios
 public usuariosInativos
 public usuariosAtivos
 public idClienteDelete
 public nomeCliente
 public plano
 public planoAtual
 public idUsuario
 filtroEmpresa
 formCliente: FormGroup;
  constructor( private suporte: SuporteService,public sevUsuario: UsuariosService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUsuarios()
    this.getUsuariosInativos()
    this.getUsuariosAtivos()
    this.iniciarFormCliente()
  }


  iniciarFormCliente() {
    this.formCliente = this.formBuilder.group({
      plano: [this.planoAtual, Validators.required],
    });
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

  deletarCliente(id,titulo){
    this.idClienteDelete = id
    this.nomeCliente = titulo
    
   }

   editar(usuario){
    this.idUsuario = usuario._id
    this.planoAtual = usuario.plano
    this.iniciarFormCliente()
   }

  editarCliente(){
     console.log()
    this.sevUsuario.PlanoCliente(this.idUsuario,this.formCliente.value).subscribe(
     (res: any)=>{
      this.suporte.showMessage('Plano alterado com sucesso!')
      this.getUsuarios()
      this.getUsuariosInativos()
      this.getUsuariosAtivos()
   },(error) => {
    this.suporte.showMessageErro('HOUVE UM ERRO')}
  )
  
   }
 
   confirmar(){
    this.sevUsuario.deletarCliente(this.idClienteDelete).subscribe(
      (res)=> {
        this.getUsuarios()
        this.getUsuariosInativos()
        this.getUsuariosAtivos()
        this.suporte.showMessage('Cliente deletado com sucesso!')
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
