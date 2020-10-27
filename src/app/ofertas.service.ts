
import { Produtos } from './shared/produtos.model'
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class OfertasService {
    
   header = new HttpHeaders();
   _apiUrl: string = "http://localhost:3000/products/";

    constructor(private http : HttpClient) {}

    criarProduto(product: Produtos): Observable <Produtos> {
      return this.http.post<Produtos>(this._apiUrl ,product, {
        headers: this.header,
      });
    }

    delete(route: string): Observable<any> {
      this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete( this._apiUrl + route, {
        headers: this.header,
      });
    }
  
    deletarProduto(id){
      return this.delete(`${id}`)
    }


    getProdutos(){
        return this.http.get('http://localhost:3000/products/',)
      }
    

}