import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsHistoryComponent } from './documents-history.component';

describe('DocumentsHistoryComponent', () => {
  let component: DocumentsHistoryComponent;
  let fixture: ComponentFixture<DocumentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
