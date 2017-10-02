import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers', using CSS class as selector
  // selector: '[app-servers]', using DOM attribute as selector
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
