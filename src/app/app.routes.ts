import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';

export const routes: Routes = [
    {path: 'tasklist', title: 'Lista de Tarefas', component: TaskListComponent},
    {path: 'taskdetails', title: 'Detalhes da Tarefa', component: TaskDetailsComponent},
    {path: '', redirectTo: '/tasklist', pathMatch: 'full'}

];
