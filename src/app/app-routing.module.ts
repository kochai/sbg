import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { ViewTaskComponent } from './pages/view-task/view-task.component';
import { UserGuardService } from './guards/user-guard.service';


const routes: Routes = [
  {
    path: '',
    component: ListTasksComponent,
    canActivate: [UserGuardService]
  },
  {
    path: 'view-task/:id',
    component: ViewTaskComponent,
    canActivate: [UserGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
