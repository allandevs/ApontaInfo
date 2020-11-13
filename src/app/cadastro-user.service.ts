import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroUserService extends BaseService {

  constructor(http : HttpClient) { 
    super(http)
  }


  cadastrarEmpresa(obj){
    return this.post(`customers`,obj)
  }
}
