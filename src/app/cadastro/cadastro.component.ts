import { CadastroUserService } from './../cadastro-user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SuporteService } from '../suporte.service'
import { Router } from '@angular/router';
import { global} from './../shared/global'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formCadastro : FormGroup;
  cnpj
  maskTelefone = global.telmask;
  maskCnpj = global.cnpjMask
  maskCep = global.cepMask;
  tel
  constructor(private formBuilder: FormBuilder, public cadastroUser: CadastroUserService,private suporte: SuporteService,public router: Router) { }

  ngOnInit(): void {
    this.iniciarFormProdutos()
  }


  iniciarFormProdutos() {
    this.formCadastro = this.formBuilder.group({
      name: ['',Validators.required],
      nameFantasia: ['',Validators.required],
      cnpj: ['', Validators.required],
      endereco: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro:[, Validators.required],
      cidade: ['',Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      password:['', Validators.required],

    });
  }

  cadastrar(){
    this.validarCNPJ(this.cnpj)
    console.log(this.tel)
  }

  validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') {
      console.log('invalido')
      this.suporte.showMessageErro('CNPJ inválido')
    } else if  (cnpj.length != 14){
      console.log('invalido')
      this.suporte.showMessageErro('CNPJ inválido')
    } else if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){
        console.log('invalido 0000')
        // this.suporte.showMessageErro('CNPJ inválido')
        } 
        
       let tamanho = cnpj.length - 2
       let numeros = cnpj.substring(0,tamanho);
       let digitos = cnpj.substring(tamanho);
       let soma = 0;
       let pos = tamanho - 7;
       for (let i = tamanho; i >= 1; i--) {
         soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if  (resultado != digitos.charAt(0)){

        console.log('invalido 0001 ou nao existe msm')
        this.suporte.showMessageErro('CNPJ inválido')
        }
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
              return false;

              this.cadastroUser.cadastrarEmpresa(this.formCadastro.value).subscribe(

                (result :any ) =>{
                 this.suporte.showMessage('Parabéns cadastrado realizado com sucesso!')
                 this.router.navigate(['login']);
                 
              },(error) => {
               this.suporte.showMessageErro('HOUVE UM ERRO')})
            
    
 }


//   validarCNPJ(cnpj) {

//     cnpj = cnpj.replace(/[^\d]+/g,'');
 
//     if(cnpj == '') {
//       console.log('invalido')
//       this.suporte.showMessageErro('CNPJ inválido')
//     } else if  (cnpj.length != 14){
//       console.log('invalido')
//       this.suporte.showMessageErro('CNPJ inválido')
//     } else if (cnpj == "00000000000000" || 
//         cnpj == "11111111111111" || 
//         cnpj == "22222222222222" || 
//         cnpj == "33333333333333" || 
//         cnpj == "44444444444444" || 
//         cnpj == "55555555555555" || 
//         cnpj == "66666666666666" || 
//         cnpj == "77777777777777" || 
//         cnpj == "88888888888888" || 
//         cnpj == "99999999999999"){
//         console.log('invalido')
//         this.suporte.showMessageErro('CNPJ inválido')
//         } else {
//           this.cadastroUser.cadastrarEmpresa(this.formCadastro.value).subscribe(

//             (result :any ) =>{
//              this.suporte.showMessage('Parabéns cadastrado realizado com sucesso!')
//              this.router.navigate(['login']);
             
//           },(error) => {
//            this.suporte.showMessageErro('HOUVE UM ERRO')})
//         }
      
    
//  }

}
