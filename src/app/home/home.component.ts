import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor( private ofertasService: OfertasService ) { }

  ngOnInit(): void {

   console.log(this.ofertas =  this.ofertasService.getOfertas())
  }



}
