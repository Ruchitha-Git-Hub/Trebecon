import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommunicationsComponent } from './telecommunications.component';

describe('TelecommunicationsComponent', () => {
  let component: TelecommunicationsComponent;
  let fixture: ComponentFixture<TelecommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelecommunicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelecommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
