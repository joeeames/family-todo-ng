import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {AppRoutes} from './routes';

import {IdentityService} from './identityService';

@Component({
  selector: 'login',
})
@View({
  template: `
    <h1>This is the login page</h1>
    <h2>Who are you?</h2>
    <button (click)="setIdentity('Jen')">Jen</button>
    <button (click)="setIdentity('Joe')">Joe</button>
  `,
  directives: []

})
export class Login {
  constructor(private identityService: IdentityService, private router: Router, private appRoutes: AppRoutes) {

  }

  setIdentity(userName) {
    this.identityService.setIdentity(userName);
    console.log('identity set to ' + userName);
    // this.router.navigate([this.appRoutes.routes.Home.as])
  }
}

