// src/app/components/military-hierarchy/military-hierarchy.component.ts

import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MilitaryService } from '../../services/military.service';
import {Observable} from "rxjs";
import {MilitaryRankDTO} from "../../models/dto/military-rank.dto";

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
  ranks:  MilitaryRankDTO[] = [];

  private fb = inject(FormBuilder);
  private militaryService = inject(MilitaryService);

  ngOnInit() {
    this.initForm();
    this.militaryService.getRanks().subscribe({
      next: (data) => this.ranks = data,
      error: (err) => console.error('Erro ao buscar patentes:', err)
    });
  }

  private initForm() {
    this.militaryHierarchyForm = this.fb.group({
      number: [''],
      abbreviatedRank: [''],
      rank: [''],
      branch: [''],
      registrationNumber: ['', Validators.required]
    });
    this.formGroup.setControl('militaryHierarchy', this.militaryHierarchyForm);
  }
}
