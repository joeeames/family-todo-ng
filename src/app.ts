import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet, RouteConfig} from 'angular2/router';
import {AppHeader} from './app-header';
import {Router} from 'angular2/router';
import {Home} from './home/home';
import {Login} from './login';
 
@Component({
  selector: 'app',
  template: `
    <div>
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  directives: [AppHeader, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]

})
@RouteConfig([
  {path: '/', name: 'Home', component: Home, useAsDefault: true},
  {path: '/login', name: 'Login', component: Login}
])
export class App {
  
  constructor() {
  }
  

}
