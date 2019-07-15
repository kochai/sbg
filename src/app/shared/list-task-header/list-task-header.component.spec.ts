import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskHeaderComponent } from './list-task-header.component';

describe('ListTaskHeaderComponent', () => {
  let component: ListTaskHeaderComponent;
  let fixture: ComponentFixture<ListTaskHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaskHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
