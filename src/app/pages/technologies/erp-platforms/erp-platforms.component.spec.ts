import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpPlatformsComponent } from './erp-platforms.component';

describe('ErpPlatformsComponent', () => {
  let component: ErpPlatformsComponent;
  let fixture: ComponentFixture<ErpPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
