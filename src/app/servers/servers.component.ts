import { Component } from '@angular/core';

@Component({
  // ways to select components
  //selector: '[app-servers]', // attribute 
  // selector: '.app-servers', // style
  selector: 'app-servers',  // element - default for components
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created';
  serverName:string = '';
  serverCreated:boolean = false;
  servers = ['Test Server 01', 'Test Server 02'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${ this.serverName }`;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
