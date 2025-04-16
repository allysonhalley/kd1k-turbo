import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentWorkScheduleComponent } from './assignment-work-schedule.component';

describe('AssignmentWorkScheduleComponent', () => {
  let component: AssignmentWorkScheduleComponent;
  let fixture: ComponentFixture<AssignmentWorkScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentWorkScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
