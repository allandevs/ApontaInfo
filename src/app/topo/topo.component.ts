import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
@Input() rotaLink;
  constructor() { }

  ngOnInit(): void {
  }

}
