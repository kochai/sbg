import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from './list-tasks.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from 'src/app/shared/dropdown-menu/dropdown-menu.component';
import { ListTaskItemComponent } from 'src/app/shared/list-task-item/list-task-item.component';
import { ListTaskHeaderComponent } from 'src/app/shared/list-task-header/list-task-header.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksModel } from 'src/app/models/tasks';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListTasksComponent,
        DropdownMenuComponent,
        ListTaskItemComponent,
        ListTaskHeaderComponent
      ],
      imports: [
        FormsModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [
        TasksModel
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
