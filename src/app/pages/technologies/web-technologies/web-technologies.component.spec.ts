import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTechnologiesComponent } from './web-technologies.component';

describe('WebTechnologiesComponent', () => {
  let component: WebTechnologiesComponent;
  let fixture: ComponentFixture<WebTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebTechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
