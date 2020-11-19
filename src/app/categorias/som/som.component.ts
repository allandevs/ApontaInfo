import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'

@Component({
  selector: 'app-som',
  templateUrl: './som.component.html',
  styleUrls: ['./som.component.scss']
})
export class SomComponent implements OnInit {

  public produtos
  imagemProduto = "../assets/produto-sem-imagem.jpg"
  dados:any
  dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
  constructor(private sevProdutos: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Som').subscribe((res) =>{
     this.produtos = res
    })
  }
  infoLoja(id){
    this.sevProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }
}
