import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityToolsComponent } from './cybersecurity-tools.component';

describe('CybersecurityToolsComponent', () => {
  let component: CybersecurityToolsComponent;
  let fixture: ComponentFixture<CybersecurityToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybersecurityToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
