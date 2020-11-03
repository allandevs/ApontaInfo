
import { Produtos } from './shared/produtos.model'
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from './shared/oferta.model';
@Injectable()
export class OfertasService {
    
  public ofertas: Oferta [] = [

    {
        id: 1,
        categoria: "computador",
        titulo: "Notebook Lenovo Ideapad S145",
        descricao_oferta: "Notebook Lenovo Ideapad S145, Intel Core i5-8265U 8GB, 1TB, Placa de Vídeo NVIDIA GeForce",
        anunciante: "Eletro Info",
        valor: 2229.99,
        destaque: true,
        imagens: [
            {url: "/assets/produtos/notebook/notebook.jpg"},
            {url: "/assets/ofertas/1/img2.jpg"},
            {url: "/assets/ofertas/1/img3.jpg"},
            {url: "/assets/ofertas/1/img4.jpg"}
        ]
    },
    {
        id: 2,
        categoria: "console",
        titulo: "Computador Completo Core i5 4°",
        descricao_oferta: "Computador Completo Core i5 4° Geração 8gb Hd 500gb + Monitor 18.5 + Wi-fi",
        anunciante: "Games Rio",
        valor: 4432.99,
        destaque: true,
        imagens: [
            {url: "/assets/produtos/computador/pc.jpg"},
            {url: "/assets/ofertas/2/img2.jpg"},
            {url: "/assets/ofertas/2/img3.jpg"},
            {url: "/assets/ofertas/2/img4.jpg"}
        ]

    },
    {
        id: 4,
        categoria: "cameras",
        titulo: "Câmera GoPro MAX 360, Preto",
        descricao_oferta: "Três câmeras em uma. Habilidades clássicas no estilo HERO. Captura esférica como mágica.",
        anunciante: "Nova Era Eletrônicos",
        valor: 1101.99,
        destaque: true,
        imagens: [
            {url: "/assets/produtos/camera/camera.jpg"},
            {url: "/assets/ofertas/3/img2.jpg"},
            {url: "/assets/ofertas/3/img3.jpg"},
            {url: "/assets/ofertas/3/img4.jpg"},
            {url: "/assets/ofertas/3/img5.jpg"},
            {url: "/assets/ofertas/3/img6.jpg"}
        ]
    }
]

public getOfertas(): Array<Oferta>{

    return this.ofertas
}

   header = new HttpHeaders();
   _apiUrl: string = "http://localhost:3000/products/";

    constructor(private http : HttpClient) {}

    criarProduto(product: Produtos): Observable <Produtos> {
      return this.http.post<Produtos>(this._apiUrl ,product, {
        headers: this.header,
      });
    }

    delete(route: string): Observable<any> {
      this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete( this._apiUrl + route, {
        headers: this.header,
      });
    }
  
    deletarProduto(id){
      return this.delete(`${id}`)
    }


    getProdutos(){
        return this.http.get('http://localhost:3000/products/',)
      }
    

}