import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service'

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.scss']
})
export class ComputadoresComponent implements OnInit {
produtos: any = []

  constructor(private sevProdutos: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutosCategoria()
  }

  getProdutosCategoria(){
    this.sevProdutos.getProdutoCategoria('Computadores').subscribe((res) =>{
     this.produtos = res
    })
  }

}
