import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.scss']
})
export class CelularesComponent implements OnInit {
  constructor(private sevProdutos: ProdutosService) { }
  public produtos
  imagemProduto = "../assets/produto-sem-imagem.jpg"
  dados:any
  dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
  carregarSpinner: boolean = true
  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Celulares').subscribe((res) =>{
     this.produtos = res.filter(({ customer }) => customer?.active)
     console.log(this.produtos)
     this.carregarSpinner = false
    })
  }

  infoLoja(id){
    this.sevProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }

  produtosLoja(id){
   alert(id)
  }
}
