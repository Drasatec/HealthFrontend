import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureBookingClientComponent } from './future-booking-client.component';

describe('FutureBookingClientComponent', () => {
  let component: FutureBookingClientComponent;
  let fixture: ComponentFixture<FutureBookingClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureBookingClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureBookingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
