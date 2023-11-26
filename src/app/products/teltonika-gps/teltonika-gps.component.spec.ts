import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeltonikaGpsComponent } from './teltonika-gps.component';

describe('TeltonikaGpsComponent', () => {
  let component: TeltonikaGpsComponent;
  let fixture: ComponentFixture<TeltonikaGpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeltonikaGpsComponent]
    });
    fixture = TestBed.createComponent(TeltonikaGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
