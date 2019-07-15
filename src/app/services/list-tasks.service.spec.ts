import { TestBed } from '@angular/core/testing';

import { ListTasksService } from './list-tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { TasksModel } from '../models/tasks';

describe('ListTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      TasksModel
    ]
  }));

  it('should be created', () => {
    const service: ListTasksService = TestBed.get(ListTasksService);
    expect(service).toBeTruthy();
  });
});
