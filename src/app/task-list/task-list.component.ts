import { Component } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { TaskFilterComponent } from '../task-filter/task-filter.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskFilterComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(private taskService: TaskService) { }

  tasks: Array<Task> = [];

}
