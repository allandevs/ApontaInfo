import { UsuariosService } from './../usuarios.service';
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
  getCnpj
  name
  nameFantasia
  senha
  repSenha
  cepX
  cepFormatado = ''
  maskTelefone = global.telmask;
  maskCnpj = global.cnpjMask
  maskCep = global.cepMask;
  tel
  endereco : any = ' '

  constructor(private formBuilder: FormBuilder, 
    public cadastroUser: CadastroUserService,
    private suporte: SuporteService,
    public router: Router,
    public sevUsuario: UsuariosService ) { 
      
    }

  ngOnInit(): void {
   this.iniciarFormProdutos()
  
  }


  iniciarFormProdutos() {
    console.log(this.endereco)
    this.formCadastro = this.formBuilder.group({
      name: [this.name,Validators.required],
      nameFantasia: [this.nameFantasia,Validators.required],
      cnpj: [this.cnpj, Validators.required],
      endereco: [ this.endereco.logradouro, Validators.required],
      numero: [ '', Validators.required],
      complemento: [''],
      bairro:[this.endereco.bairro, Validators.required],
      cidade: [this.endereco.localidade,Validators.required],
      estado: [this.endereco.uf, Validators.required],
      cep: [this.endereco.cep, Validators.required],
      telefone: [this.tel, Validators.required],
      email: ['', Validators.required],
      password:['', Validators.required],

    });
  }

  BuscarEndereco(cep){
    this.cepFormatado = cep.replace("-", "").replace("_", "");
    this.sevUsuario.getEnd(this.cepFormatado).subscribe((res =>{
      this.endereco = res
      console.log(res)
      this.iniciarFormProdutos()
    }))
  
  }
  cadastrar(){
    this.sevUsuario.getUsuarios().subscribe((result) =>{
      this.getCnpj= result.filter(({ cnpj }) => cnpj == this.cnpj )
      if(this.getCnpj.length == 0){
        this.validarCNPJ(this.cnpj)
      } else if(this.getCnpj.length != 0) {
        this.suporte.showMessageErro('Esse CNPJ já se encontra em uso!')
      }
       })
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

              
              if(this.senha === this.repSenha){
                this.cadastroUser.cadastrarEmpresa(this.formCadastro.value).subscribe(

                  (result :any ) =>{
                   this.suporte.showMessage('Parabéns cadastrado realizado com sucesso!')
                   this.router.navigate(['login']);
                   
                },(error) => {
                 this.suporte.showMessageErro('HOUVE UM ERRO')})
              
              }else {
                this.suporte.showMessageErro('A confirmação de senha, não confere.')
              }
            
    
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
