import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManangmentComponent } from './fleet-manangment.component';

describe('FleetManangmentComponent', () => {
  let component: FleetManangmentComponent;
  let fixture: ComponentFixture<FleetManangmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetManangmentComponent]
    });
    fixture = TestBed.createComponent(FleetManangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
