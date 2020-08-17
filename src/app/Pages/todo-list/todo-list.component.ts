import {Component, OnInit} from '@angular/core';
import {Todo} from '../../Modules/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [
    new Todo('Learn to Dance', false, new Date()),
    new Todo('Become an Expert at Angular', false, new Date()),
    new Todo('Visit Japan', false, new Date()),
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
