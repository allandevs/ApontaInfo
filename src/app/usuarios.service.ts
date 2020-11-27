import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService {

  constructor(http : HttpClient) {
    super(http)
  }

  getUsuarios(){
    return this.get(`customers`)
  }

  getUsuariosInativos(){
    return this.get(`customers/usuarioInativo`)
  }
  
  getUsuariosAtivos(){
    return this.get(`customers/usuarioAtivo`)
  }
  statusCliente(id, obj){
    return this.update(`customers/status/${id}`,obj)
  }

  getEnd(obj){
    return this.getEndereco(`${obj}/json`)
  }

}
