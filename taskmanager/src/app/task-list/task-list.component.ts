// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';
import { Task } from '../Model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  statussearch: string = '';
  currentPage: number = 1; // Current page
  itemsPerPage: number = 5; // Items per page

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
  }

  toggleEdit(task: Task): void {
    task.editing = !task.editing;     //This property is commonly used to track whether a task is currently being edited.

    if (!task.editing) {      //if the editing property is false.... it means the task is not in edit mode... and code inside the if
      this.taskService.updateTask(task);  //it will call update method inside taskService and pass task as an argument....
    }     // This suggests that when you exit the editing mode (by clicking "Save" or elsewhere), the task is updated with the changes.
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  // Pagination
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  get visibleTasks(): Task[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tasks.slice(startIndex, endIndex);
  }

  getPaginationArray(): number[] {
    const pageCount = this.totalPages();
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  totalPages(): number {
    return Math.ceil(this.tasks.length / this.itemsPerPage);
  }
}
