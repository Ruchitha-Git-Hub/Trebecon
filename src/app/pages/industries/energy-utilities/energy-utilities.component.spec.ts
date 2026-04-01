import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyUtilitiesComponent } from './energy-utilities.component';

describe('EnergyUtilitiesComponent', () => {
  let component: EnergyUtilitiesComponent;
  let fixture: ComponentFixture<EnergyUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyUtilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
