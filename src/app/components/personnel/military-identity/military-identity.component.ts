import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from "@angular/common";

@Component({
  selector: 'app-military-identity',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NgForOf,
    TranslateModule
  ],
  templateUrl: './military-identity.component.html',
  styleUrl: './military-identity.component.scss'
})
export class MilitaryIdentityComponent {
  @Input() formGroup!: FormGroup;
  @Input() states: string[] = [];
  @Input() maritalStatuses: string[] = [];
}
