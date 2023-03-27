import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingPatientPageComponent } from './my-booking-patient-page.component';

describe('MyBookingPatientPageComponent', () => {
  let component: MyBookingPatientPageComponent;
  let fixture: ComponentFixture<MyBookingPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookingPatientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookingPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
