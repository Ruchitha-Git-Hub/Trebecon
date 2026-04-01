import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffingServicesComponent } from './it-staffing-services.component';

describe('ItStaffingServicesComponent', () => {
  let component: ItStaffingServicesComponent;
  let fixture: ComponentFixture<ItStaffingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItStaffingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItStaffingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
