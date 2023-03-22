import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDisAgreeByHospitalComponent } from './reservation-dis-agree-by-hospital.component';

describe('ReservationDisAgreeByHospitalComponent', () => {
  let component: ReservationDisAgreeByHospitalComponent;
  let fixture: ComponentFixture<ReservationDisAgreeByHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDisAgreeByHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationDisAgreeByHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
