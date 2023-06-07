import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo;
  @Input() i: number | undefined;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();
  constructor(){}

  Onclick(todo : Todo){
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo : Todo){
    this.todoCheckBox.emit(todo);
  }
}