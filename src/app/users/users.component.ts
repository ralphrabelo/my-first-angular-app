import { Component } from "@angular/core";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
  })
export class UsersComponent {
    allowCreateUser:boolean = false;
    userCreationStatus:string = 'No user was created';
    userName:string = '';
    
    onCreateUser() {
        this.userCreationStatus = `User was created! Name is ${ this.userName }`;
    }
    
    onUpdateUserName(event: Event) {
        //console.log((<HTMLInputElement>event.target).value);
        this.userName = (<HTMLInputElement>event.target).value;
        this.allowCreateUser = ((<HTMLInputElement>event.target).value != '');    
    }
    isUserNameEmpty(){
        return (this.userName === '');
    }

    onResetUser(){
        this.userName = '';
    }
}