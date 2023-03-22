import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingByClientComponent } from './booking-by-client.component';

describe('BookingByClientComponent', () => {
  let component: BookingByClientComponent;
  let fixture: ComponentFixture<BookingByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingByClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
