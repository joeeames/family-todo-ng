import {Component, OnInit} from 'angular2/core';
import {TodoService} from "../services/todoService";
import {IdentityService} from '../services/identityService';
import {NewItemInput} from './newItemInput';
import {UserFilterPipe} from '../userFilterPipe';

@Component({
  selector: 'item-list',
//      <h1>power: {{2 | exponentialStrength: 10}}</h1>

  template: `
      <div *ngFor="#item of todos | userFilter:'Joe'">
        items: {{item.title}}
      </div>
      <new-item-input ></new-item-input>
  `,
  directives: [NewItemInput],
  pipes: [UserFilterPipe]
})
export class ItemList {
  todos:any;
  constructor(private todoService:TodoService, 
      private identityService: IdentityService) {
    
    // this.todos = todoService.getTodosFor(this.identityService.currentIdentity);
  }
  
  ngOnInit() {
    this.todos = this.todoService.todos;
  }
}

