import {Component, View, Output, EventEmitter} from 'angular2/core';
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
  @Output('newItemAdded') newItemAdded = new EventEmitter();
  
  constructor(private todoService:TodoService) {
    
  }
  
  addNewItem(newItemEl, assigneeEl) {
    this.todoService.addTodo(this.newValue, this.assignee);
    newItemEl.value = "";
    assigneeEl.value = "";
    this.newItemAdded.emit("event");
  }
}

