import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable()
export class TasksModel {
  public tasks: Task[] = [];
  public task: Task = null;

  constructor() { }

  public setTasks(tasks: Task[]): void {
    this.tasks = tasks;
  }

  public setTask(task: Task): void {
    this.task = task;
  }
}
