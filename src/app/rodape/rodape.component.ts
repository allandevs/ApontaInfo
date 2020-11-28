import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service'
@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {
 public produtos
  constructor(private sevProdutos: ProdutosService) { }

  ngOnInit(): void {
  this.sevProdutos.getProdutos().subscribe((res)=>{
    this.produtos = res
  })
  }
 
}
