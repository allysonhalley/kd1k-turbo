// src/app/components/contact-dependents/contact-dependents.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-dependents',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-dependents.component.html',
  styleUrls: ['./contact-dependents.component.scss']
})
export class ContactDependentsComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() dependents!: FormArray;

  contactForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    // Initialize the contact form
    this.contactForm = this.fb.group({
      email: ['', Validators.email],
      phone1: [''],
      phone2: [''],
      phone3: [''],
      spouse: [''],
      spouseBirthDate: ['']
    });

    // Associate the sub-form to the main form
    this.formGroup.setControl('contact', this.contactForm);
  }

  addDependent() {
    const dependentForm = this.fb.group({
      name: ['', Validators.required],
      birthDate: ['']
    });

    this.dependents.push(dependentForm);
  }

  removeDependent(index: number) {
    this.dependents.removeAt(index);
  }
}
