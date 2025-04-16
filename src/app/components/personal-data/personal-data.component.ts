// src/app/components/personal-data/personal-data.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MilitaryService } from '../../services/military.service';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  personalDataForm!: FormGroup;
  militaryIdentityForm!: FormGroup;
  familyForm!: FormGroup;

  states: string[] = [];
  maritalStatuses: string[] = [];

  private fb = inject(FormBuilder);
  private militaryService = inject(MilitaryService);

  ngOnInit() {
    this.initForms();
    this.states = this.militaryService.getStates();
    this.maritalStatuses = this.militaryService.getMaritalStatuses();
  }

  private initForms() {
    // Initialize the personal data form
    this.personalDataForm = this.fb.group({
      fullName: ['', Validators.required],
      militaryName: ['', Validators.required],
      ssn: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      birthDate: [''],
      birthMonth: [''],
      maritalStatus: [''],
      gender: [''],
      religion: ['']
    });

    // Initialize the military identity form
    this.militaryIdentityForm = this.fb.group({
      number: [''],
      issuingAuthority: [''],
      state: [''],
      issueDate: [''],
      expirationDate: ['']
    });

    // Initialize the family form
    this.familyForm = this.fb.group({
      motherName: ['', Validators.required],
      fatherName: [''],
      nationality: [''],
      birthplace: [''],
      birthplaceState: ['']
    });

    // Associate the sub-forms to the main form
    this.formGroup.setControl('personalData', this.personalDataForm);
    this.formGroup.setControl('militaryIdentity', this.militaryIdentityForm);
    this.formGroup.setControl('family', this.familyForm);
  }
}
