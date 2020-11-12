// import { ProdutosService } from './../produtos.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Produtos} from '../shared/produtos.model'
import { ProdutosService } from '../produtos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[OfertasService]
})
export class HomeComponent implements OnInit {
  
  public ofertas: Oferta[]

  product: Produtos = {
    title: 'mouse dell bom',
    description: 'acho que vai',
    slug: 'testeInfovsssdds',
    price: 1251
  }
 produtos ;
 produtosCategoria
  constructor( private ofertasService: OfertasService, private sevProdutos: ProdutosService,  private http : HttpClient ) { }

  ngOnInit(): void {
  //  this.criarProduto()
  //  this.listarTodosProdutos()
  this.ofertas =  this.ofertasService.getOfertas()
  }
  
  
  criarProduto(){
    this.sevProdutos.criarProduto(this.product).subscribe((res) => {
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

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Computadores').subscribe((res) =>{
     console.log(res)
    })
  }
 
}
