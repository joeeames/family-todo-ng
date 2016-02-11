import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <style>
      .completed {
        text-decoration: line-through;
      }
    </style>
    <span [ngClass]="{completed: item.completed}" (click)="completeItem()">{{item.title}}</span>
  `,
  directives: [],
  pipes: []
})
export class TodoItem {
  @Input() item;
  status:string;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  completeItem(event) {
    this.item.completed = !this.item.completed;
  }
  
}

