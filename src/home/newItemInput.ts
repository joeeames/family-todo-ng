import {Component, View} from 'angular2/core';
import {TodoService} from "../services/todoService";
import {IdentityService} from '../services/identityService';

@Component({
  selector: 'new-item-input',
})
@View({
  template: `
      <input #newitemEl type="text" [(ngModel)]="newValue" placeholder="description" >
      <input #assigneeEl type="text" [(ngModel)]="assignee" placeholder="assigned to" >
      <button (click)="addNewItem(newitemEl, assigneeEl)">Add</button>
  `
})
export class NewItemInput {
  newValue:string;
  assignee:string;
  
  constructor(private todoService:TodoService) {
    
  }
  
  addNewItem(newItemEl, assigneeEl) {
    this.todoService.addTodo(this.newValue, this.assignee);
    console.log(this.todoService.todos);
    newItemEl.value = "";
    assigneeEl.value = "";
  }
}

