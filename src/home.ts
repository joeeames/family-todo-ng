import {Component, View, NgFor} from 'angular2/angular2';
import {TodoService} from "./todoService";
import {Router} from 'angular2/router';
import * as Joe from './routes';
// import {IdentityService} from './moreRoutes';

import {IdentityService} from './identityService';

console.log(1, Joe);

@Component({
  selector: 'home',
})
@View({
  template: `
      <h1>Family Todo App</h1>
      <div *ng-for="#item of todos">
        item: {{item.title}}
      </div>

  `,
  directives: [NgFor]

})
export class Home {
  todos:any;
  constructor(todoService:TodoService, 
      private identityService: IdentityService, 
      private router: Router,
      private routes: AppRoutes) {
    this.todos = todoService.todos;

    // if not logged in, redirect
    console.log('logged in', !this.identityService.isLoggedIn())
    if(!this.identityService.isLoggedIn()) {
      // this.router.navigate([this.appRoutes.routes.Login.as])
    }
  }
}

