import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-list-task-item',
  templateUrl: './list-task-item.component.html',
  styleUrls: ['./list-task-item.component.scss']
})
export class ListTaskItemComponent implements OnInit {

  @Input() public task: Task = null;

  constructor() { }

  ngOnInit() {
  }

}
