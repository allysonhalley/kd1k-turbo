import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryIdentityComponent } from './military-identity.component';

describe('MilitaryIdentityComponent', () => {
  let component: MilitaryIdentityComponent;
  let fixture: ComponentFixture<MilitaryIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryIdentityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilitaryIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
