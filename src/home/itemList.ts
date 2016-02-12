import {Component, OnInit} from 'angular2/core';
import {TodoService} from "../services/todoService";
import {IdentityService} from '../services/identityService';
import {NewItemInput} from './newItemInput';
import {TodoItem} from './todoItem';

@Component({
  selector: 'item-list',
  template: `
      <div *ngFor="#item of todos">
        <todo-item [item]="item" (newItemAdded)="raiseEvent()"></todo-item>
      </div>
      <new-item-input ></new-item-input>
  `,
  directives: [NewItemInput, TodoItem],
  pipes: []
})
export class ItemList {
  todos:any;
  things:any;
  constructor(private todoService:TodoService, 
      private identityService: IdentityService) {
  }
  
  ngOnInit() {
    this.todos = this.getMyTodos();
  }
  
  raiseEvent() {
    console.log('event raised');
  }
  
  getMyTodos() {
    return this.todoService.todos.filter(i => {
      return i.assignee === null || !!this.identityService.currentIdentity && i.assignee === this.identityService.currentIdentity.name;
    })
  }
  
}

