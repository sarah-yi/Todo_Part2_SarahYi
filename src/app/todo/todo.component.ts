import { Component } from '@angular/core';
interface Todo {
  task: string;
  completed: boolean;
}
@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'To Do List';
  completed: boolean = true;
  newTask: string;


tasks: Todo[] = [
{completed: false, task: 'Walk the dog'},
{completed: true, task: 'Go to the store'},
{completed: false, task: 'Get gas'},
{completed: false, task: 'Wash Car'},
  ]

filterTask: string = "";
filteredTaskItems = [...this.tasks];

filterTaskItems() {
  this.filteredTaskItems = this.tasks.filter(
    item => item.task.toLowerCase().indexOf(this.filterTask.toLowerCase()) > -1);
    if (!this.filterTask) {
      this.filteredTaskItems = [...this.tasks];
    }
  }

addTask() {
  const newItem = {
    task: this.newTask,
    completed: false
    }
    this.tasks.push(newItem)
    this.filteredTaskItems = [...this.tasks];
    this.newTask = null;
  }

completeTask(tasks: Todo) {
  tasks.completed = !tasks.completed;
}

removeTask(tasks: Todo) {
const index = this.tasks.indexOf(tasks, 0);
  if (index > -1) {
  this.tasks.splice(index, 1)
  this.filteredTaskItems = [...this.tasks];
  }
}

}



  



