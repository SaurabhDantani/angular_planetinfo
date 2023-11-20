import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelManagerComponent } from './fuel-manager.component';

describe('FuelManagerComponent', () => {
  let component: FuelManagerComponent;
  let fixture: ComponentFixture<FuelManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelManagerComponent]
    });
    fixture = TestBed.createComponent(FuelManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
