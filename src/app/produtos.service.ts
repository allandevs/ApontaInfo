import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global} from './shared/global'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends BaseService {

  constructor(http : HttpClient) {
    super(http)
   }


   criarProduto(obj){
    return this.post(`products`,obj)
   }

   getProdutos(){
    return this.get(`products`)
  }
  
  deletarProduto(id){
    return this.delete(`products/${id}`)
  }

  editarProduto(id, obj){
    return this.update(`products/${id}`,obj)
  }
  statusProduto(id, obj){
    return this.update(`products/status/${id}`,obj)
  }
 
  getProdutoCategoria(categoria){
    return this.get(`products/category/${categoria}`)
  }
  getProdutoCustomer(customer){
    return this.get(`products/customer/${customer}`)
  }

  getCustomer(id){
    return this.get(`customers/${id}`)
  }
}


