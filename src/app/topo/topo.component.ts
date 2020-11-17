import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
@Input() rotaLink;
public logado: boolean = false
dadosUsuario = JSON.parse(localStorage.getItem('userLogged'));
  constructor(public router: Router) { 
    
  }

  ngOnInit(): void {
    
    console.log(this.logado)
    if (localStorage.getItem('userLogged')) {
      this.logado = true
      console.log(this.logado)
    }else{
      this.logado = false
      console.log(this.logado)
    }
      
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
  
}
