import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'
@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {

  public produtos
  imagemProduto = "../assets/produto-sem-imagem.jpg"
  dados:any;
  dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
  carregarSpinner: boolean = true
  constructor(private sevProdutos: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Cameras').subscribe((res) =>{
     this.produtos = res.filter(({ customer }) => customer?.active)
     this.carregarSpinner = false
    })
  }

  infoLoja(id){
    this.sevProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }

}
