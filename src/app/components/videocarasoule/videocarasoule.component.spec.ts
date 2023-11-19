import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocarasouleComponent } from './videocarasoule.component';

describe('VideocarasouleComponent', () => {
  let component: VideocarasouleComponent;
  let fixture: ComponentFixture<VideocarasouleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideocarasouleComponent]
    });
    fixture = TestBed.createComponent(VideocarasouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
