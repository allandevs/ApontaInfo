import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import { ProdutosService } from '../produtos.service'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {
  public ofertas: Oferta[]
  public produtos
  public produtosDestaque
  public dados
  dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
  constructor(private ofertasService: OfertasService, private sevProdutos: ProdutosService ) { }

  ngOnInit(): void {
    this.ofertas =  this.ofertasService.getOfertas()
    this.getBuscarProdutos()
  }


  listarTodosProdutos() {
    this.ofertasService.getProdutos().subscribe((res) => {
     this.produtos = res 
     console.log('aqui',this.produtos)
    })
             
  }

  getBuscarProdutos() {
    this.sevProdutos.getProdutos().subscribe((res) => {
     this.produtosDestaque = res.filter(({ customer }) => customer.active && customer.plano == 'super' || customer.active && customer.plano == 'max' 
      );
      console.log(this.produtosDestaque)
      
    });
    
  }

  infoLoja(id){
    this.sevProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }

}
