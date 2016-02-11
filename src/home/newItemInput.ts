import {Component, View} from 'angular2/core';
import {TodoService} from "../services/todoService";
import {IdentityService} from '../services/identityService';

@Component({
  selector: 'new-item-input',
})
@View({
  template: `
    <form class="form-inline">
      <input #newitemEl type="text" [(ngModel)]="newValue" placeholder="description" class="form-control" >
      <input #assigneeEl type="text" [(ngModel)]="assignee" placeholder="assigned to"  class="form-control">
      <button (click)="addNewItem(newitemEl, assigneeEl)" class="btn btn-primary">Add</button>
    </form>
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

