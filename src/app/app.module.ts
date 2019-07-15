import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { ViewTaskComponent } from './pages/view-task/view-task.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { UserModel } from './models/user';
import { TasksModel } from './models/tasks';
import { UserGuardService } from './guards/user-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    UserModel,
    TasksModel,
    UserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
