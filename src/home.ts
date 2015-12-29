import {Component, View} from 'angular2/core';
import {TodoService} from "./todoService";
import {Router} from 'angular2/router';
import {AppRoutes} from './routes';
import {IdentityService} from './identityService';

@Component({
  selector: 'home',
})
@View({
  template: `
      <h1>Family Todo App</h1>
      <div *ngFor="#item of todos">
        item: {{item.title}}
      </div>

  `

})
export class Home {
  todos:any;
  constructor(todoService:TodoService, 
      private identityService: IdentityService, 
      private router: Router) {
    this.todos = todoService.getTodosFor(this.identityService.currentIdentity);

    if(!this.identityService.isLoggedIn()) {
      this.router.navigate([AppRoutes.Login.as])
    }
  }
}

