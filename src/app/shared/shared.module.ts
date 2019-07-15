import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListTaskItemComponent } from './list-task-item/list-task-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListTaskHeaderComponent } from './list-task-header/list-task-header.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { CreationModalComponent } from './creation-modal/creation-modal.component';

@NgModule({
  declarations: [
    ListTaskItemComponent,
    ListTaskHeaderComponent,
    DropdownMenuComponent,
    CreationModalComponent
  ],
  exports: [
    ListTaskItemComponent,
    ListTaskHeaderComponent,
    DropdownMenuComponent,
    CreationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
