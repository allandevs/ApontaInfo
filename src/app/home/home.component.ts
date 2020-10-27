import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Produtos} from '../shared/produtos.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[OfertasService]
})
export class HomeComponent implements OnInit {
  
  product: Produtos = {
    title: 'teclado dell bom',
    description: 'acho que vai',
    slug: 'testeInfovsdds',
    price: 1251
  }
 produtos ;
  constructor( private ofertasService: OfertasService, private http : HttpClient ) { }

  ngOnInit(): void {
   this.criarProduto()
   this.listarTodosProdutos()
  }
  
  criarProduto(){
    this.ofertasService.criarProduto(this.product).subscribe((res)=>{
      return console.log(res)
    })
  }

  listarTodosProdutos() {
    this.ofertasService.getProdutos().subscribe((res) => {
     this.produtos = res 
     console.log('aqui',this.produtos)
    })
             
  }


  delete(){
    this.ofertasService.delete('5f7e53c487370943e8afb8f1').subscribe((res)=> {
      return console.log(res)
    })
  }

 
}
