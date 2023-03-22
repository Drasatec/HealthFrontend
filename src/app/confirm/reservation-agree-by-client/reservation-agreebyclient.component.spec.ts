import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAgreebyclientComponent } from './reservation-agreebyclient.component';

describe('ReservationAgreebyclientComponent', () => {
  let component: ReservationAgreebyclientComponent;
  let fixture: ComponentFixture<ReservationAgreebyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAgreebyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAgreebyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
