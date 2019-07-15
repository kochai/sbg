import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { TasksModel } from '../models/tasks';
import { Limits, SelectedLimits } from '../interfaces/limits';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class ListTasksService {
  private get backendUrl(): string {
    return environment.backendBaseUrl;
  }
  public isLoading = false;
  public params: SelectedLimits = {
    limit: '5',
    status: 'QUEUED'
  };
  public searchDefaults: Limits = {
    limits: ['5', '10', '25'],
    statuses: [
      'QUEUED',
      'DRAFT',
      'RUNNING',
      'COMPLETED',
      'ABORTED',
      'FAILED'
    ]
  };

  constructor(protected httpClient: HttpClient,
              private tasksModel: TasksModel) { }

  public getTasks(): Promise<any> {
    return this.httpClient.get(`${this.backendUrl}/tasks`, { params: this.params })
      .toPromise()
      .then((tasks: any) => {
        Promise.resolve(tasks);
        this.tasksModel.setTasks(tasks.items);
        this.isLoading = false;
      })
      .catch(err => {
        Promise.reject(err);
        this.isLoading = false;
        throw new Error(err);
      });
  }

  public getTask(id: string): Promise<any> {
    return this.httpClient.get(`${this.backendUrl}/tasks/${id}`)
      .toPromise()
      .then((task: Task) => {
        Promise.resolve(task);
        this.tasksModel.setTask(task);
      })
      .catch(err => Promise.reject(err));
  }

  public deleteTask(id: string): Promise<any> {
    return this.httpClient.delete(`${this.backendUrl}/tasks/${id}`)
      .toPromise()
      .then(resolve => {
        Promise.resolve(resolve);
      })
      .catch(err => Promise.reject(err));
  }

  public setLimit(limit: string) {
    this.params.limit = limit;
    this.getTasks();
  }

  public setStatus(status: string) {
    this.params.status = status;
    this.getTasks();
  }
}
