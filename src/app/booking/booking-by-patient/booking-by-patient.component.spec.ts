import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingByPatientComponent } from './booking-by-patient.component';

describe('BookingByPatientComponent', () => {
  let component: BookingByPatientComponent;
  let fixture: ComponentFixture<BookingByPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingByPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingByPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
