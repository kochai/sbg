import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-creation-modal',
  templateUrl: './creation-modal.component.html',
  styleUrls: ['./creation-modal.component.scss']
})
export class CreationModalComponent implements OnInit {

  public projectName = '';
  public error = false;
  public errorMessage = '';

  @Output() closed: EventEmitter<string> = new EventEmitter<string>();

  constructor(protected projectsService: ProjectsService) { }

  ngOnInit() { }

  public closeModal(): void {
    this.closed.emit();
  }

  public createProject(): void {
    if (this.projectName.length) {
      this.error = false;
      this.projectsService.createNewProject(this.projectName)
        .catch((err: HttpErrorResponse) => {
          this.error = true;
          this.errorMessage = err.error.message;
        });
    }
  }

}
