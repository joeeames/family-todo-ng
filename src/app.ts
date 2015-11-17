import {Component, View, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from 'angular2/router';
import {TodoService} from './todoService';
import {IdentityService} from './identityService';
import {Header} from './header';
import {AppRoutes, APP_ROUTES} from './routes';
console.log(2, AppRoutes);
@Component({
  selector: 'app',

})
@View({
  template: `
    <div>
      <header></header>
      <main>
        <router-outlet></router-outlet>
      </main>

    <a [router-link]="[routes.Home.as]" class="router-link">Home</a>
    <a [router-link]="[routes.Login.as]" class="router-link">Login</a>
    <router-outlet></router-outlet>
          </div>
  `,
  directives: [Header, ROUTER_DIRECTIVES]

})
@RouteConfig(APP_ROUTES)
export class App {
  public routes = new AppRoutes().routes
}
// console.log('approutes', new AppRoutes());

bootstrap(App, [ROUTER_PROVIDERS, TodoService, IdentityService, AppRoutes]);