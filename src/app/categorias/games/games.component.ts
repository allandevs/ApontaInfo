import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public produtos
  constructor(private sevProdutos: ProdutosService) { }
  imagemProduto = "../assets/produto-sem-imagem.jpg"
  dados:any
  dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));

  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Games').subscribe((res) =>{
     this.produtos = res
     console.log(this.produtos )
    })
  }

  infoLoja(id){
    this.sevProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }
}
