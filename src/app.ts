import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from 'angular2/router';
import {IdentityService} from './identityService';
import {AppHeader} from './app-header';
import {AppRoutes, APP_ROUTES} from './routes';
import {Router} from 'angular2/router';

@Component({
  selector: 'app',

})
@View({
  template: `
    <div>
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  directives: [AppHeader, ROUTER_DIRECTIVES]

})
@RouteConfig(APP_ROUTES)
export class App {
  
  constructor() {
  }
  

}
