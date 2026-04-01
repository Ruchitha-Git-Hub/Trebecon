import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationTesterComponent } from './automation-tester.component';

describe('AutomationTesterComponent', () => {
  let component: AutomationTesterComponent;
  let fixture: ComponentFixture<AutomationTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
