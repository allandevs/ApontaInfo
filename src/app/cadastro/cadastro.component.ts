import { CadastroUserService } from './../cadastro-user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SuporteService } from '../suporte.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formCadastro : FormGroup;
  cnpj
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
   this.cadastroUser.cadastrarEmpresa(this.formCadastro.value).subscribe(

     (result :any ) =>{
      this.suporte.showMessage('Parabéns cadastrado realizado com sucesso!')
      this.router.navigate(['login']);
      
   },(error) => {
    this.suporte.showMessageErro('HOUVE UM ERRO')})
    // this.validarCNPJ(this.cnpj)
  }



//   validarCNPJ(cnpj) {
//     cnpj = cnpj.replace(/[^\d]+/g,'');
 
//     if(cnpj == '') {
//       console.log('invalido')
//       this.suporte.showMessageErro('CNPJ INVálido')
//     }
     
//     if (cnpj.length != 14){
//       console.log('invalido')
//       this.suporte.showMessageErro('CNPJ INVálido')
//     }
  
 
//     // Elimina CNPJs invalidos conhecidos
//     if (cnpj == "00000000000000" || 
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
//         this.suporte.showMessageErro('CNPJ INVálido')
//         }
        
         
//     // Valida DVs
//    var tamanho = cnpj.length - 2
//    var numeros = cnpj.substring(0,tamanho);
//    var digitos = cnpj.substring(tamanho);
//    var soma = 0;
//    var pos = tamanho - 7;
//     for (i = tamanho; i >= 1; i--) {
//      soma += numeros.charAt(tamanho - i) * pos--;
//       if (pos < 2)
//             pos = 9;
//     }
//    var  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(0))
//         return false;
         
//     tamanho = tamanho + 1;
//     numeros = cnpj.substring(0,tamanho);
//     soma = 0;
//     pos = tamanho - 7;
//     for (var i = tamanho; i >= 1; i--) {
//       soma += numeros.charAt(tamanho - i) * pos--;
//       if (pos < 2)
//             pos = 9;
//     }
//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(1)){
//       return false
//     }else{
//       this.suporte.showMessage('CNPJ valido')
//     }
          
    
//  }

}
