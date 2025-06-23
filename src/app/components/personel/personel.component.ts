import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

import {PersonalDataComponent} from "./personal-data/personal-data.component";
import {MilitaryHierarchyComponent} from "../military-hierarchy/military-hierarchy.component";
import {MilitaryService} from "../../services/military.service";
import {FamilyComponent} from "./family/family.component";
import {NgIf} from "@angular/common";
import {MilitaryIdentityComponent} from "./military-identity/military-identity.component";


@Component({
  selector: 'app-personel',
  standalone: true,
  imports: [
    FormsModule,
    MatTab,
    MatTabGroup,
    ReactiveFormsModule,
    PersonalDataComponent,
    FamilyComponent,
    NgIf,
    MilitaryIdentityComponent
  ],
  templateUrl: '../personel/personel.component.html',
  styleUrl: '../personel/personel.component.scss'
})
export class PersonelComponent implements OnInit {
  militaryForm!: FormGroup;
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
    this.militaryForm = this.fb.group({
      personalData: this.fb.group({
        fullName: ['', Validators.required],
        militaryName: ['', Validators.required],
        ssn: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
        birthDate: [''],
        birthMonth: [''],
        maritalStatus: [''],
        gender: [''],
        religion: ['']
      }),
      militaryIdentity: this.fb.group({
        number: [''],
        issuingAuthority: [''],
        state: [''],
        issueDate: [''],
        expirationDate: ['']
      }),
      family: this.fb.group({
        motherName: ['', Validators.required],
        fatherName: [''],
        nationality: [''],
        birthplace: [''],
        birthplaceState: ['']
      }),
      militaryHierarchy: this.fb.group({
        // ... campos específicos
      })
      // ... outros subgrupos se necessário
    });
  }
}
