import { Component, Input, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from "@angular/common";
import { MilitaryService } from '../../../services/military.service';

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
export class MilitaryIdentityComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  states: string[] = [];
  @Input() maritalStatuses: string[] = [];

  private militaryService = inject(MilitaryService);

  ngOnInit() {
    this.states = this.militaryService.getStates();
  }
}
