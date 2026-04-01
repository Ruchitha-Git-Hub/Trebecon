import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentServicesComponent } from './software-development-services.component';

describe('SoftwareDevelopmentServicesComponent', () => {
  let component: SoftwareDevelopmentServicesComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevelopmentServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
