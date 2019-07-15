import { Component, OnInit } from '@angular/core';
import { ListTasksService } from 'src/app/services/list-tasks.service';
import { TasksModel } from 'src/app/models/tasks';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  constructor(public listTasksService: ListTasksService,
              public tasksModel: TasksModel) { }

  ngOnInit() {
    this.listTasksService.getTasks();
  }

  public updateLimitFilter(filter: string): void {
    this.listTasksService.setLimit(filter);
  }

  public updateStatusFilter(filter: string): void {
    this.listTasksService.setStatus(filter);
  }

}
