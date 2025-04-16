// src/app/components/military-hierarchy/military-hierarchy.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MilitaryService } from '../../services/military.service';

@Component({
  selector: 'app-military-hierarchy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './military-hierarchy.component.html',
  styleUrls: ['./military-hierarchy.component.scss']
})
export class MilitaryHierarchyComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  militaryHierarchyForm!: FormGroup;
  ranks: string[] = [];

  private fb = inject(FormBuilder);
  private militaryService = inject(MilitaryService);

  ngOnInit() {
    this.initForm();
    this.ranks = this.militaryService.getRanks();
  }

  private initForm() {
    // Initialize the military hierarchy form
    this.militaryHierarchyForm = this.fb.group({
      number: [''],
      abbreviatedRank: [''],
      rank: [''],
      branch: [''],
      registrationNumber: ['', Validators.required]
    });

    // Associate the sub-form to the main form
    this.formGroup.setControl('militaryHierarchy', this.militaryHierarchyForm);
  }
}
