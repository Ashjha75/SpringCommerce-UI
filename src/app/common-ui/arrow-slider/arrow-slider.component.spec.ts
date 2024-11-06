import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowSliderComponent } from './arrow-slider.component';

describe('ArrowSliderComponent', () => {
  let component: ArrowSliderComponent;
  let fixture: ComponentFixture<ArrowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
