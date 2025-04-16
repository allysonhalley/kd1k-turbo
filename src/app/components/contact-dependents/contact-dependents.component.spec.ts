import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDependentsComponent } from './contact-dependents.component';

describe('ContactDependentsComponent', () => {
  let component: ContactDependentsComponent;
  let fixture: ComponentFixture<ContactDependentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDependentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
