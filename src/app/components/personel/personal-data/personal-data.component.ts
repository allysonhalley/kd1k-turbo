import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {
  @Input() formGroup!: FormGroup;
  @Input() maritalStatuses: string[] = [];
}
