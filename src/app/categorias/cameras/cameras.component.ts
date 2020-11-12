import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'
@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {

  public produtos
  constructor(private sevProdutos: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Cameras').subscribe((res) =>{
     this.produtos = res
    })
  }
}
