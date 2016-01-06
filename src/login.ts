import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {IdentityService} from './services/identityService';


@Component({
  selector: 'login',
  template: `
    <h1>This is the login page</h1>
    <h2>Who are you?</h2>
    <button (click)="setIdentity('Jen')">Jen</button>
    <button (click)="setIdentity('Joe')">Joe</button>
  `,
  directives: []

})
export class Login {
  constructor(private identityService: IdentityService, private router: Router) {
  }

  setIdentity(userName) {
    this.identityService.setIdentity(userName);
    this.router.navigate(['Home'])
  }
  
}

