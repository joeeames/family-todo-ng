import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig} from 'angular2/router';
import {IdentityService} from './services/identityService';
import {Router} from 'angular2/router';
// import {AppRoutes, APP_ROUTES} from './routes';

@Component({
  selector: 'app-header',
})
@View({
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['Home']" class="router-link">Home</a></li>
          </ul>
          
          <ul class="nav navbar-nav navbar-right">
            <li *ngIf="identityService.isLoggedIn()" class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">{{identityService.name}}
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li *ngIf="identityService.isLoggedIn()">
                  <a href="" (click)="logout($event)" class="router-link">Logout</a>
                </li>
                
              </ul>
            </li>
            <li *ngIf="!identityService.isLoggedIn()">
              <a [routerLink]="['Login']" class="router-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  directives: [ROUTER_DIRECTIVES]

})
export class AppHeader {
  // public routes = AppRoutes;
  public y = true;

  constructor(private identityService: IdentityService, private router: Router) {
    this.identityService = identityService;
  }
  
  logout(e) {
    e.preventDefault()
    this.identityService.logout();
    this.router.navigate(['Login'])
  }
}

