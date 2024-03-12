import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css'
})
export class ServerComponent {
    serverId: number;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
        this.serverId = Math.round(Math.random() * 10);
    }
    
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return (this.serverStatus === 'online' ? 'green' : 'red');
    }

    isServerStateOnline() {
        return this.serverStatus === 'online';
    }
}