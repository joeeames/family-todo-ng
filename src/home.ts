import {Component, View, NgFor} from 'angular2/angular2';
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
      private router: Router) {
    console.log('constructing home');
    this.todos = todoService.getTodosFor(this.identityService.currentIdentity);
    console.log('todos', this.todos);

    if(!this.identityService.isLoggedIn()) {
      this.router.navigate([AppRoutes.Login.as])
    }
  }
}

