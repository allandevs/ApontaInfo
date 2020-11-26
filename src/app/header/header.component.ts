import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public buscarProduto;
  public produtosFiltrados
  constructor(private servProdutos: ProdutosService, private route: Router) {}

  ngOnInit(): void {}
  getBuscarProdutos() {
    this.route.navigate([`busca/${this.buscarProduto}`])
    // console.log(this.buscarProduto);
    // this.servProdutos.getProdutos().subscribe((res) => {
    //  this.produtosFiltrados = res.filter(({ title }) => title.toLowerCase().includes(this.buscarProduto.toLowerCase())
    //   );
    //   console.log(this.produtosFiltrados)
      
    // });
    
  }
}
