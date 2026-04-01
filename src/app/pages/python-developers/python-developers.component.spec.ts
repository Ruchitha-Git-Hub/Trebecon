import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDevelopersComponent } from './python-developers.component';

describe('PythonDevelopersComponent', () => {
  let component: PythonDevelopersComponent;
  let fixture: ComponentFixture<PythonDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
