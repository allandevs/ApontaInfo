import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(http : HttpClient) { 
    super(http)
  }


  authUsuario(obj){
    return this.post(`customers/authenticate`, obj);
  }

}
