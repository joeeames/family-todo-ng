import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {IdentityService} from '../services/identityService';
import {ItemList} from './itemList';
import {ExponentialStrengthPipe} from '../userFilterPipe';

@Component({
  selector: 'home',

  //
      
  template: `
    <h1>Family Todo App {{ 3 | exponentialStrength: 8}}</h1>
    <new-item-input></new-item-input>
    <item-list></item-list>
  `,
  directives: [ItemList],
  pipes: [ExponentialStrengthPipe]
})
export class Home implements OnInit {
  todos:any;
  constructor( 
      private identityService: IdentityService, 
      private router: Router) {
  
  }
  
  ngOnInit() {
    if(!this.identityService.isLoggedIn()) {
      this.router.navigate(['Login'])
    }
  }
}

