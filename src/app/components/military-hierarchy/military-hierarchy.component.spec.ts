import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryHierarchyComponent } from './military-hierarchy.component';

describe('MilitaryHierarchyComponent', () => {
  let component: MilitaryHierarchyComponent;
  let fixture: ComponentFixture<MilitaryHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryHierarchyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilitaryHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
