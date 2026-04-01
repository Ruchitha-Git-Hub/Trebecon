import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopersComponent } from './web-developers.component';

describe('WebDevelopersComponent', () => {
  let component: WebDevelopersComponent;
  let fixture: ComponentFixture<WebDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


