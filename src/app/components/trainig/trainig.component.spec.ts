import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainigComponent } from './trainig.component';

describe('TrainigComponent', () => {
  let component: TrainigComponent;
  let fixture: ComponentFixture<TrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
