import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { global} from './shared/global'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends BaseService {

  constructor(http : HttpClient,private snackBar: MatSnackBar) {
    super(http)
   }

   showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"top",
      // panelClass: isError ?  ['msg-error'] : ['msg-sucess'],
      panelClass: ['snackbar']
    })
  }
  showMessageErro(msg: string, isError: boolean = false){
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"top",
      // panelClass: isError ?  ['msg-error'] : ['msg-sucess'],
      panelClass: ['snackbarRed']
    })
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
 
  getProdutoCategoria(categoria){
    return this.get(`products/category/${categoria}`)
  }
  getProdutoCustomer(customer){
    return this.get(`products/customer/${customer}`)
  }
}


