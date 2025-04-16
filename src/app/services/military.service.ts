// src/app/services/military.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MilitaryFormData } from '../models/military.model';

@Injectable({
  providedIn: 'root'
})
export class MilitaryService {
  // In production, replace with real API URL
  private apiUrl = 'api/military';

  constructor(private http: HttpClient) { }

  /**
   * Saves military personnel data to the backend
   */
  saveMilitaryData(data: MilitaryFormData): Observable<any> {
    // In a real environment, this would send to the backend
    // return this.http.post<any>(this.apiUrl, data);

    // Success simulation for demonstration (remove in production)
    console.log('Data sent:', data);
    return of({ success: true, message: 'Data saved successfully!' });
  }

  /**
   * Gets the list of US states
   */
  getStates(): string[] {
    return [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];
  }

  /**
   * Gets the list of military ranks
   */
  getRanks(): string[] {
    return [
      'Private', 'Corporal', '3rd Sergeant', '2nd Sergeant', '1st Sergeant',
      'Master Sergeant', 'Warrant Officer', '2nd Lieutenant', '1st Lieutenant',
      'Captain', 'Major', 'Lieutenant Colonel', 'Colonel'
    ];
  }

  /**
   * Gets the list of education levels
   */
  getEducationLevels(): string[] {
    return [
      'Incomplete Elementary School', 'Complete Elementary School',
      'Incomplete High School', 'Complete High School',
      'Incomplete College', 'Complete College',
      'Post-graduate', 'Master\'s Degree', 'Doctorate'
    ];
  }

  /**
   * Gets the list of marital statuses
   */
  getMaritalStatuses(): string[] {
    return [
      'Single', 'Married', 'Divorced', 'Widowed', 'Domestic Partnership'
    ];
  }
}
