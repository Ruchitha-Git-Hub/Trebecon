import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMlFrameworksComponent } from './ai-ml-frameworks.component';

describe('AiMlFrameworksComponent', () => {
  let component: AiMlFrameworksComponent;
  let fixture: ComponentFixture<AiMlFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiMlFrameworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiMlFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
