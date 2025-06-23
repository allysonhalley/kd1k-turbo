import {Component, Input} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-military-identity',
  standalone: true,
    imports: [
      CommonModule,
      ReactiveFormsModule,
      NgIf,
      NgForOf
    ],
  templateUrl: './military-identity.component.html',
  styleUrl: './military-identity.component.scss'
})
export class MilitaryIdentityComponent {
  @Input() formGroup!: FormGroup;
  @Input() states: string[] = [];
  @Input() maritalStatuses: string[] = [];
}
