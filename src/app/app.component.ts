// src/app/app.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { MilitaryHierarchyComponent } from './components/military-hierarchy/military-hierarchy.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { AssignmentWorkScheduleComponent } from './components/assignment-work-schedule/assignment-work-schedule.component';
import { DocumentsHistoryComponent } from './components/documents-history/documents-history.component';
import { ContactDependentsComponent } from './components/contact-dependents/contact-dependents.component';

// Services
import { MilitaryService } from './services/military.service';

// Data model
import { MilitaryFormData } from './models/military.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PersonalDataComponent,
    MilitaryHierarchyComponent,
    QualificationsComponent,
    AssignmentWorkScheduleComponent,
    DocumentsHistoryComponent,
    ContactDependentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  militaryForm: FormGroup;
  activeTab = 1;
  jsonResult = '';
  showResult = false;

  private fb = inject(FormBuilder);
  private militaryService = inject(MilitaryService);

  constructor() {
    this.militaryForm = this.fb.group({
      personalData: this.fb.group({}),
      militaryIdentity: this.fb.group({}),
      family: this.fb.group({}),
      militaryHierarchy: this.fb.group({}),
      qualifications: this.fb.group({}),
      education: this.fb.group({}),
      assignment: this.fb.group({}),
      workSchedule: this.fb.group({}),
      militaryHistory: this.fb.group({}),
      address: this.fb.group({}),
      bankDetails: this.fb.group({}),
      voterRegistration: this.fb.group({}),
      driversLicense: this.fb.group({}),
      boatLicense: this.fb.group({}),
      firearm: this.fb.group({}),
      measurements: this.fb.group({}),
      contact: this.fb.group({}),
      dependents: this.fb.array([])
    });
  }

  get dependents() {
    return this.militaryForm.get('dependents') as FormArray;
  }

  changeTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  submitForm() {
    if (this.militaryForm.valid) {
      const formData: MilitaryFormData = this.militaryForm.value;
      this.jsonResult = JSON.stringify(formData, null, 2);
      this.showResult = true;

      this.militaryService.saveMilitaryData(formData).subscribe({
        next: (response) => {
          console.log('Data sent successfully', response);
          // Implement success feedback for the user
        },
        error: (error) => {
          console.error('Error sending data', error);
          // Implement error feedback for the user
        }
      });
    } else {
      this.markFormGroupTouched(this.militaryForm);
      alert('Please fill in all required fields.');
    }
  }

  clearForm() {
    this.militaryForm.reset();
    // Clear the dependents array
    while (this.dependents.length !== 0) {
      this.dependents.removeAt(0);
    }
    this.showResult = false;
  }

  // Helper function to mark all fields as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
