import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudEngineersComponent } from './cloud-engineers.component';

describe('CloudEngineersComponent', () => {
  let component: CloudEngineersComponent;
  let fixture: ComponentFixture<CloudEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudEngineersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
