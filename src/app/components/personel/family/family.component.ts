import {Component, Input} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss'
})
export class FamilyComponent {
  @Input() formGroup!: FormGroup;
  @Input() states: string[] = [];
  @Input() maritalStatuses: string[] = [];
}
