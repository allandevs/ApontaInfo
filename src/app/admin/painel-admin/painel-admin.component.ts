import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-painel-admin',
  templateUrl: './painel-admin.component.html',
  styleUrls: ['./painel-admin.component.scss']
})
export class PainelAdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
