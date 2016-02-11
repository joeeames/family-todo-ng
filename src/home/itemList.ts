import {Component, OnInit} from 'angular2/core';
import {TodoService} from "../services/todoService";
import {IdentityService} from '../services/identityService';
import {NewItemInput} from './newItemInput';
import {UserFilterPipe} from '../userFilterPipe';
import {TodoItem} from './todoItem';

@Component({
  selector: 'item-list',
  template: `
      <div *ngFor="#item of todoService.todos | userFilter:'Joe' ">
        <todo-item [item]="item"></todo-item>
      </div>
      <new-item-input ></new-item-input>
  `,
  directives: [NewItemInput, TodoItem],
  pipes: [UserFilterPipe]
})
export class ItemList {
  todos:any;
  things:any;
  constructor(private todoService:TodoService, 
      private identityService: IdentityService) {
  }
  
  ngOnInit() {
  }
  
}

