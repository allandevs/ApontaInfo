import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../ofertas.service'
import { Oferta } from '../../shared/oferta.model'
import { ProdutosService } from '../../produtos.service'
import {SuporteService } from '../../suporte.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';




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
 imagem: File
 file: any
 imagemProduto; 
 carregarBotao: boolean = true
 dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
 
  constructor(private suporte: SuporteService, private sevProdutos: ProdutosService,private formBuilder: FormBuilder,public router: Router) { }

  async ngOnInit() {
    this.iniciarFormProdutosEdit()
    this.getProdutos()
  
  }
  

  iniciarFormProdutos() {
    console.log('aqui imagem',this.file)
    this.formProdutos = this.formBuilder.group({
      customer: [this.dadosUsuario.id],
      category: ['',Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image:[this.file,Validators.required],
    });
  }

  iniciarFormProdutosEdit() {
    this.formProdutosEdit = this.formBuilder.group({
      customer: [this.dadosUsuario.id],
      category: [this.data.category, Validators.required],
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required],
      price: [this.data.price, Validators.required],
      
    });
  }

  cadastrarProduto(){
   if(this.produtos.length < 5){
    this.sevProdutos.criarProduto(this.formProdutos.value).subscribe(
      (res: any) => {
        this.suporte.showMessage('Produto Criado com sucesso!')
        this.getProdutos()
      },(error) => {
        this.suporte.showMessageErro('HOUVE UM ERRO')}
      )
      setTimeout(()=>{ 
        window.location.reload();                   
      }, 3000);

   } else {
    this.suporte.showMessageErro('OPS você excedeu seu limite de produtos!')
   }
   this.formProdutos = this.formBuilder.group({
    customer: [this.dadosUsuario.id],
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
        this.suporte.showMessage('Produto atualizado com sucesso!')
      })
  }

 statusProduto(produto){
   if(produto.active){
    const obj = {
      active: false
    }
    this.sevProdutos.statusProduto(produto._id,obj).subscribe((res: any)=> {
      this.getProdutos()
      this.suporte.showMessage('Produto desabilitado com sucesso!')
    })
  }
    if(produto.active == false){
      const obj = {
        active: true
      }
      this.sevProdutos.statusProduto(produto._id,obj).subscribe((res: any)=> {
        this.getProdutos()
        this.suporte.showMessage('Produto ativado com sucesso!')
      })
   }

  
  
 
    
   
  //  if(produto.active){
  //   this.sevProdutos.statusProduto(produto._id).subscribe((res: any)=> {
  //     this.getProdutos()
  //     this.suporte.showMessage('Produto desabilitado com sucesso!')
  //   })
  //  }else {
  //   this.sevProdutos.statusProduto(produto._id).subscribe((res: any)=> {
  //     this.getProdutos()
  //     this.suporte.showMessage('Produto ativado com sucesso!')
  //   })
  //  }
   
 }
  editarProduto(produto){
    this.data = produto 
    this.iniciarFormProdutosEdit()
  }

  confirmar(){
    this.sevProdutos.deletarProduto(this.idProdutoDelete).subscribe(
      (res)=> {
        this.getProdutos()
        this.suporte.showMessage('Produto deletado com sucesso!')
    })
  }

  getProdutos(){

     console.log(this.dadosUsuario)
    this.sevProdutos.getProdutoCustomer(this.dadosUsuario.id).subscribe((res)=>{
    this.produtos = res
    console.log(this.produtos)
    })
  }

  prepareUploadPhoto(event) {
  this.imagem = event.target.files[0]
   let reader = new FileReader();
   reader.readAsDataURL(this.imagem);
   reader.onload =  () => {
    this.file = reader.result
    this.iniciarFormProdutos()
    console.log(this.file)
    this.setImagem()
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
   console.log(this.file)
  }

  cancelarCadastro(){
    window.location.reload();
  }

 setImagem(){
 this.imagemProduto = this.file
 }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
