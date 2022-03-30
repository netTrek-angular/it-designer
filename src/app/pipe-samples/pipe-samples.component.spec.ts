import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSamplesComponent } from './pipe-samples.component';

describe('PipeSamplesComponent', () => {
  let component: PipeSamplesComponent;
  let fixture: ComponentFixture<PipeSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
