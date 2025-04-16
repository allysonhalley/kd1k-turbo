// src/app/components/documents-history/documents-history.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MilitaryService } from '../../services/military.service';

@Component({
  selector: 'app-documents-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './documents-history.component.html',
  styleUrls: ['./documents-history.component.scss']
})
export class DocumentsHistoryComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  militaryHistoryForm!: FormGroup;
  addressForm!: FormGroup;
  bankDetailsForm!: FormGroup;
  voterRegistrationForm!: FormGroup;
  driversLicenseForm!: FormGroup;
  boatLicenseForm!: FormGroup;
  firearmForm!: FormGroup;
  measurementsForm!: FormGroup;

  states: string[] = [];

  private fb = inject(FormBuilder);
  private militaryService = inject(MilitaryService);

  ngOnInit() {
    this.initForms();
    this.states = this.militaryService.getStates();
  }

  private initForms() {
    // Initialize the military history form
    this.militaryHistoryForm = this.fb.group({
      entryDateCBMPE: [''],
      serviceTime: [''],
      accruedTime: [''],
      totalTime: [''],
      formattedTotalTime: [''],
      arrivalDateGBAPH: [''],
      spArrivalGBAPH: [''],
      lastPromotionDate: [''],
      coaph: [false],
      crv: [false],
      cmr: [false],
      mpmbm: [false]
    });

    // Initialize the address form
    this.addressForm = this.fb.group({
      zipCode: ['', Validators.pattern(/^\d{5}(-\d{4})?$/)],
      street: [''],
      number: [''],
      complement: [''],
      reference: [''],
      neighborhood: [''],
      city: [''],
      state: ['']
    });

    // Initialize the bank details form
    this.bankDetailsForm = this.fb.group({
      bank: [''],
      branch: [''],
      accountType: [''],
      accountNumber: [''],
      digit: ['']
    });

    // Initialize the voter registration form
    this.voterRegistrationForm = this.fb.group({
      number: [''],
      zone: [''],
      section: [''],
      state: ['']
    });

    // Initialize the driver's license form
    this.driversLicenseForm = this.fb.group({
      registrationNumber: [''],
      state: [''],
      expirationDate: [''],
      category: [''],
      firstLicenseDate: [''],
      issueDate: ['']
    });

    // Initialize the boat license form
    this.boatLicenseForm = this.fb.group({
      number: ['']
    });

    // Initialize the firearm form
    this.firearmForm = this.fb.group({
      sigmaNumber: [''],
      serviceUseAuthorization: ['']
    });

    // Initialize the measurements form
    this.measurementsForm = this.fb.group({
      bloodType: [''],
      rhFactor: [''],
      headSize: [''],
      shoeSize: [''],
      shirtSize: [''],
      pantsSize: [''],
      bootSize: [''],
      shortsSize: [''],
      swimsuitSize: [''],
      swimTrunksSize: [''],
      organDonor: [false],
      bloodDonor: [false],
      casMember: [false],
      sismepeUser: [false],
      accidentWithOriginCertificate: [false],
      accidentWithIso: [false],
      chronicDisease: [false],
      controlledMedication: [false],
      hasAllergy: [false]
    });

    // Associate the sub-forms to the main form
    this.formGroup.setControl('militaryHistory', this.militaryHistoryForm);
    this.formGroup.setControl('address', this.addressForm);
    this.formGroup.setControl('bankDetails', this.bankDetailsForm);
    this.formGroup.setControl('voterRegistration', this.voterRegistrationForm);
    this.formGroup.setControl('driversLicense', this.driversLicenseForm);
    this.formGroup.setControl('boatLicense', this.boatLicenseForm);
    this.formGroup.setControl('firearm', this.firearmForm);
    this.formGroup.setControl('measurements', this.measurementsForm);
  }

  // Method to search address by zip code (could be implemented with real API integration)
  searchAddressByZipCode() {
    const zipCode = this.addressForm.get('zipCode')?.value;
    if (zipCode && /^\d{5}(-\d{4})?$/.test(zipCode)) {
      // Simulation of zip code search - in production, would use a real API
      console.log('Searching address for zip code:', zipCode);
      // Example for demonstration:
      setTimeout(() => {
        this.addressForm.patchValue({
          street: 'Example Avenue',
          neighborhood: 'Downtown',
          city: 'New York',
          state: 'NY'
        });
      }, 500);
    }
  }
}
