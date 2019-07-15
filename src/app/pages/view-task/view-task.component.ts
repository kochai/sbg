import { Component, OnInit } from '@angular/core';
import { ListTasksService } from 'src/app/services/list-tasks.service';
import { ActivatedRoute } from '@angular/router';
import { TasksModel } from 'src/app/models/tasks';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  public error = false;
  public errorLoadingTask = false;
  public errorMessage = '';

  constructor(protected listTasksService: ListTasksService,
              private activatedRoute: ActivatedRoute,
              public tasksModel: TasksModel) { }

  ngOnInit() {
    this.listTasksService.getTask(this.activatedRoute.snapshot.params.id)
      .then(() => this.error = false)
      .catch(err => {
        this.errorLoadingTask = true;
        this.errorMessage = err.error.message;
      });
  }

  public deleteTask(taskId: string): void {
    this.error = false;
    this.listTasksService.deleteTask(taskId)
      .then(() => this.error = false)
      .catch(err => {
        this.error = true;
        this.errorMessage = err.error.message;
      });
  }

}
