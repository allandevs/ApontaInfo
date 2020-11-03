import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../ofertas.service'
import { Oferta } from '../../shared/oferta.model'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  providers:[OfertasService]
})
export class PainelComponent implements OnInit {
  public ofertas: Oferta[]
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas =  this.ofertasService.getOfertas()
    console.log(this.ofertas)
  }

}
