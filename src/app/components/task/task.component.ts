import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit {

  @Input() task: Itask | undefined ;
  @Output() delete: EventEmitter<Itask> = new EventEmitter<Itask>;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    // Notificamos al componente superior la tarea a borrar
    this.delete.emit(this.task)
  }

}
