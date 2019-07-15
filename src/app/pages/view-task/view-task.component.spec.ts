import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { ListTasksService } from 'src/app/services/list-tasks.service';
import { TasksModel } from 'src/app/models/tasks';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { DropdownMenuComponent } from 'src/app/shared/dropdown-menu/dropdown-menu.component';
import { ListTaskHeaderComponent } from 'src/app/shared/list-task-header/list-task-header.component';
import { ListTaskItemComponent } from 'src/app/shared/list-task-item/list-task-item.component';
import { FormsModule } from '@angular/forms';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewTaskComponent,
        ListTasksComponent,
        DropdownMenuComponent,
        ListTaskHeaderComponent,
        ListTaskItemComponent
      ],
      providers: [
        ListTasksService,
        TasksModel
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
