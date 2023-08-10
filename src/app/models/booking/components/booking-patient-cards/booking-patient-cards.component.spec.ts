import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPatientCardsComponent } from './booking-patient-cards.component';

describe('BookingPatientCardsComponent', () => {
  let component: BookingPatientCardsComponent;
  let fixture: ComponentFixture<BookingPatientCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPatientCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPatientCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
