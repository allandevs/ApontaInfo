import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  buscarProduto: any;
  produtosFiltrados: any;
  dados:any
 ;

  constructor( private servProdutos: ProdutosService, private route: ActivatedRoute ) { 

  }

  ngOnInit(): void {
   this.route.params.subscribe((res) => {
  this.getBuscarProdutos(res.filtro)
   })
  }

  getBuscarProdutos(params) {
    this.servProdutos.getProdutos().subscribe((res) => {
     this.produtosFiltrados = res.filter(({ title }) => title.toLowerCase().includes(params.toLowerCase())
      );
      console.log(this.produtosFiltrados)
      
    });
    
  }

  infoLoja(id){
    this.servProdutos.getCustomer(id).subscribe((result) =>{
      this.dados = result
    })
  }

}
