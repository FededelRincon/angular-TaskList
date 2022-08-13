import { Component, OnInit } from '@angular/core';
import { Itask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // TODO: Reformular como una lista de tareas
  task1: Itask = {
    title: 'task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  }

  task2: Itask = {
    title: 'task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTaks(task: Itask){
    // TODO: sustituir alert x splice la lista de tareas
    alert(`Se procede a eliminar la tarea ${task.title}`)
  }
}
