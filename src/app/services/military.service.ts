// src/app/services/military.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MilitaryFormData, MilitaryPeopleDTO } from '../models/military.model';
import { MilitaryRankDTO } from "../models/dto/military-rank.dto";

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MilitaryService {
  // In production, replace with real API URL
  private apiBaseUrl = 'api/v1';
  private apiMilitaryUrl = this.apiBaseUrl + '/people';
  private apiRankUrl = this.apiBaseUrl + '/ranks';

  constructor(private http: HttpClient, private translate: TranslateService) { }

  /**
   * Saves military personnel data to the backend
   */
  saveMilitaryData(data: MilitaryFormData): Observable<any> {
    // In a real environment, this would send to the backend
    // return this.http.post<any>(this.apiUrl, data);

    // Success simulation for demonstration (remove in production)
    console.log('Data sent:', data);
    return of({ success: true, message: this.translate.instant('MESSAGES.DATA_SAVED_SUCCESS') });
  }

  /**
   * Gets the list of Brazilian states
   */
  getStates(): string[] {
    return [
      'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
      'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
      'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];
  }

  /**
   * Gets the list of military people
   */
  getPeople(): Observable<MilitaryPeopleDTO[]> {
    return this.http.get<MilitaryPeopleDTO[]>(this.apiMilitaryUrl);
  }

  /**
   * Gets the list of military ranks
   */
  getRanks(): Observable<MilitaryRankDTO[]> {
    return this.http.get<MilitaryRankDTO[]>(this.apiRankUrl);
  }

  /**
   * Gets the list of education levels
   */
  getEducationLevels(): string[] {
    return [
      'Ensino Fundamental Incompleto', 'Ensino Fundamental Completo',
      'Ensino Médio Incompleto', 'Ensino Médio Completo',
      'Ensino Superior Incompleto', 'Ensino Superior Completo',
      'Pós-Graduação', 'Mestrado', 'Doutorado'
    ];
  }

  /**
   * Gets the list of marital statuses
   */
  getMaritalStatuses(): string[] {
    return [
      'Solteiro', 'Casado', 'Divorciado', 'Viúvo', 'União Estável'
    ];
  }
}
