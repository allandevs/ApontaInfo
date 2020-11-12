import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../ofertas.service'
import { Oferta } from '../../shared/oferta.model'
import { ProdutosService } from '../../produtos.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  providers:[OfertasService]
})
export class PainelComponent implements OnInit {
 public ofertas: Oferta[]
 formProdutos : FormGroup;
 formProdutosEdit : FormGroup;
 produtos = [];
 idProdutoDelete
 nomeProduto
 data: any =  []
  constructor(private ofertasService: OfertasService,private sevProdutos: ProdutosService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.ofertas)
    this.iniciarFormProdutos()
    this.iniciarFormProdutosEdit()
    this.getProdutos()
  }


  iniciarFormProdutos() {
    this.formProdutos = this.formBuilder.group({
      category: ['',Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  iniciarFormProdutosEdit() {
    this.formProdutosEdit = this.formBuilder.group({
      category: [this.data.category, Validators.required],
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required],
      price: [this.data.price, Validators.required],
    });
  }

  cadastrarProduto(){
    this.sevProdutos.criarProduto(this.formProdutos.value).subscribe(
      (res: any) => {
        this.getProdutos()
        this.sevProdutos.showMessage('Produto Criado com sucesso!')
      }
      )
    this.formProdutos = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }


  deletarProduto(id,titulo){
   this.idProdutoDelete = id
   this.nomeProduto = titulo
   console.log(this.idProdutoDelete)
  }

  atualizarProduto(){
    this.sevProdutos.editarProduto(this.data._id, this.formProdutosEdit.value).subscribe(
      (res: any ) => {
        this.getProdutos()
        this.sevProdutos.showMessage('Produto atualizado com sucesso!')
      })
  }

  editarProduto(produto){
    this.data = produto 
    this.iniciarFormProdutosEdit()
  }

  confirmar(){
    this.sevProdutos.deletarProduto(this.idProdutoDelete).subscribe(
      (res)=> {
        this.getProdutos()
        this.sevProdutos.showMessage('Produto deletado com sucesso!')
    })
  }

  getProdutos(){
    this.sevProdutos.getProdutos().subscribe((res)=>{
    this.produtos = res
    console.log(this.produtos)
    })
  }
}
