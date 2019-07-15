import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskItemComponent } from './list-task-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListTasksComponent } from 'src/app/pages/list-tasks/list-tasks.component';
import { ViewTaskComponent } from 'src/app/pages/view-task/view-task.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { ListTaskHeaderComponent } from '../list-task-header/list-task-header.component';
import { FormsModule } from '@angular/forms';

describe('ListTaskItemComponent', () => {
  let component: ListTaskItemComponent;
  let fixture: ComponentFixture<ListTaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListTaskItemComponent,
        ListTasksComponent,
        DropdownMenuComponent,
        ListTaskHeaderComponent,
        ViewTaskComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
