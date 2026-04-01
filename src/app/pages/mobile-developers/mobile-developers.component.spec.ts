import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopersComponent } from './mobile-developers.component';

describe('MobileDevelopersComponent', () => {
  let component: MobileDevelopersComponent;
  let fixture: ComponentFixture<MobileDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
