// src/app/components/qualifications/qualifications.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MilitaryService } from '../../services/military.service';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  qualificationsForm!: FormGroup;
  educationForm!: FormGroup;

  educationLevels: string[] = [];

  private fb = inject(FormBuilder);
  private militaryService = inject(MilitaryService);

  ngOnInit() {
    this.initForms();
    this.educationLevels = this.militaryService.getEducationLevels();
  }

  private initForms() {
    // Initialize the qualifications form
    this.qualificationsForm = this.fb.group({
      courseName: ['']
    });

    // Initialize the education form
    this.educationForm = this.fb.group({
      educationLevel: [''],
      institution: [''],
      course: [''],
      period: ['']
    });

    // Associate the sub-forms to the main form
    this.formGroup.setControl('qualifications', this.qualificationsForm);
    this.formGroup.setControl('education', this.educationForm);
  }
}
