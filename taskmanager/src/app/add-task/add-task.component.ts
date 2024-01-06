import { Component } from '@angular/core';
import { Task } from '../Model/task.model';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  newTask: Task = {
    title: '',
    dueDate: new Date(),
    status: 'To Do', // Default status
  };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.title.trim() === '') {
      // Add input validation: Check if title is empty
      return;
    }

    this.taskService.addTasks(this.newTask);
    this.newTask = {
      title: '',
      dueDate: new Date(),
      status: 'To Do', // Reset status
    };
  }
}