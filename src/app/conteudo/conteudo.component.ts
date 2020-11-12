import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {
  public ofertas: Oferta[]
  public produtos
  constructor(private ofertasService: OfertasService ) { }

  ngOnInit(): void {
    this.ofertas =  this.ofertasService.getOfertas()
  }


  listarTodosProdutos() {
    this.ofertasService.getProdutos().subscribe((res) => {
     this.produtos = res 
     console.log('aqui',this.produtos)
    })
             
  }
}
