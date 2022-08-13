import { Component, Input, OnInit } from '@angular/core';
import { Itask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit {

  @Input() task: Itask | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log('Eliminar una tarea', this.task?.title)
  }

}
