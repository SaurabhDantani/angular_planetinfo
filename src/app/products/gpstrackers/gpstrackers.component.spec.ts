import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpstrackersComponent } from './gpstrackers.component';

describe('GpstrackersComponent', () => {
  let component: GpstrackersComponent;
  let fixture: ComponentFixture<GpstrackersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GpstrackersComponent]
    });
    fixture = TestBed.createComponent(GpstrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
