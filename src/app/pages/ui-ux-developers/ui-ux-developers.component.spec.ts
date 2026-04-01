import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUXDevelopersComponent } from './ui-ux-developers.component';

describe('UIUXDevelopersComponent', () => {
  let component: UIUXDevelopersComponent;
  let fixture: ComponentFixture<UIUXDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIUXDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIUXDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
