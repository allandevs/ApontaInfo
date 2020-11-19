import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'
import { global} from '../../shared/global'

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.scss']
})
export class ComputadoresComponent implements OnInit {
produtos: any = []
imagemProduto = "../assets/produto-sem-imagem.jpg"
dados:any
dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
maskTelefone = global.telmask;
  constructor(private sevProdutos: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Computadores').subscribe((res) =>{
     this.produtos = res
     console.log(this.produtos)
    })
  }

  infoLoja(id){
    this.sevProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }

}
