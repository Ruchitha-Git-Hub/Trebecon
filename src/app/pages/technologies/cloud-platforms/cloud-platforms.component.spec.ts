import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPlatformsComponent } from './cloud-platforms.component';

describe('CloudPlatformsComponent', () => {
  let component: CloudPlatformsComponent;
  let fixture: ComponentFixture<CloudPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
