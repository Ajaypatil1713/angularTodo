import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { FilterPipe } from './filter.pipe';
// import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    FilterPipe, // Add UpdateTaskComponent to the declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // MatDialogModule, // Add MatDialogModule to the imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
