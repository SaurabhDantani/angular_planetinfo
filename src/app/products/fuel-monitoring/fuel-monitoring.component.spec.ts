import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelMonitoringComponent } from './fuel-monitoring.component';

describe('FuelMonitoringComponent', () => {
  let component: FuelMonitoringComponent;
  let fixture: ComponentFixture<FuelMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelMonitoringComponent]
    });
    fixture = TestBed.createComponent(FuelMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
