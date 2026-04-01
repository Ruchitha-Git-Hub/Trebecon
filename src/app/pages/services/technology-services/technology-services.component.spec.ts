import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyServicesComponent } from './technology-services.component';

describe('TechnologyServicesComponent', () => {
  let component: TechnologyServicesComponent;
  let fixture: ComponentFixture<TechnologyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
