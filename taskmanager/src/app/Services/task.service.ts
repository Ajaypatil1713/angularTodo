import { Injectable } from '@angular/core';
import { Task } from '../Model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTasks(task: Task): void {
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t === task);
    if (index !== -1) {
      this.tasks[index] = task;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(task: Task): void {
    const index = this.tasks.findIndex(t => t === task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    }
  }
  
  private saveTasksToLocalStorage(): void {
    // Save the tasks array to local storage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
