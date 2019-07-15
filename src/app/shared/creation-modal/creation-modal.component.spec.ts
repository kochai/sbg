import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationModalComponent } from './creation-modal.component';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { HttpClientModule } from '@angular/common/http';

describe('CreationModalComponent', () => {
  let component: CreationModalComponent;
  let fixture: ComponentFixture<CreationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreationModalComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        ProjectsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
