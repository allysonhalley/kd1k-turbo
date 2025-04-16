// src/app/components/assignment-work-schedule/assignment-work-schedule.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment-work-schedule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assignment-work-schedule.component.html',
  styleUrls: ['./assignment-work-schedule.component.scss']
})
export class AssignmentWorkScheduleComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  assignmentForm!: FormGroup;
  workScheduleForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.initForms();
  }

  private initForms() {
    // Initialize the assignment form
    this.assignmentForm = this.fb.group({
      location: ['']
    });

    // Initialize the work schedule form
    this.workScheduleForm = this.fb.group({
      schedule: [''],
      reducedWorkload: [false],
      readapted: [false]
    });

    // Associate the sub-forms to the main form
    this.formGroup.setControl('assignment', this.assignmentForm);
    this.formGroup.setControl('workSchedule', this.workScheduleForm);
  }
}
